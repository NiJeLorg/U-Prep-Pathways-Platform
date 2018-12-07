import attachEvidenceService from "../services/attachEvidence-service";

export default [
    "$scope",
    "$controller",
    "$mdDialog",
    "score",
    "ElementService",
    "IndicatorScoreService",
    "TeacherService",
    "ObservationService",
    "UtilService",
    "ScoreService",
    "$stateParams",
    function(
        $scope,
        $controller,
        $mdDialog,
        score,
        ElementService,
        IndicatorScoreService,
        TeacherService,
        ObservationService,
        UtilService,
        ScoreService,
        $stateParams
    ) {
        $scope.score = score.data;
        $scope.indicatorValue = [null, 1, 2, 3, 4];
        let teacher = {};
        let observations;

        // fetch data
        ElementService.fetchElements().then(
            res => {
                $scope.elements = res.data.data;
                checkComponentsToBeExpanded($scope.elements);
            },
            err => console.error(err)
        );

        TeacherService.get(
            {
                id: $scope.score.teacher_id
            },
            res => {
                teacher = res.data;
            },
            err => {
                console.error(err);
            }
        );

        ObservationService.fetchTeacherObservations(
            $scope.score.teacher_id
        ).then(
            res => {
                observations = res.data.data;
            },
            err => {
                console.error(err);
            }
        );

        const fetchScore = () => {
            ScoreService.query({
                id: $stateParams.scoreId
            }).$promise.then(res => {
                $scope.score = res.data;
            });
        };

        const checkComponentsToBeExpanded = elements => {
            const { indicator_scores } = $scope.score;
            const filtered = indicator_scores.map(indicatorScore => {
                const { indicator_id } = indicatorScore;
                return indicator_id;
            });

            for (let i = 0; i < elements.length; i++) {
                const { components } = elements[i];
                for (let j = 0; j < components.length; j++) {
                    const { indicators } = components[j];
                    components[j].expanded = checkIndicator(
                        filtered,
                        indicators
                    );
                }
            }

            function checkIndicator(filtered, indicators) {
                let exists = false;
                for (let i = 0; i < indicators.length; i++) {
                    const { id } = indicators[i];
                    if (filtered.includes(id)) {
                        exists = true;
                        break;
                    }
                }
                return exists;
            }
        };

        $scope.getAddSelectedIndicators = indicators => {
            indicators.map(indicator => {
                $scope.score.indicator_scores.map(indicator_score => {
                    if (indicator_score.indicator_id === indicator.id) {
                        indicator_score.value = "" + indicator_score.value;
                        indicator.indicatorScore = indicator_score;
                    }
                });
            });
            return indicators;
        };

        $scope.storeIndicatorScore = (value, indicator) => {
            IndicatorScoreService.createIndicatorScore({
                value: value,
                score_id: $scope.score.id,
                indicator_id: indicator.id
            }).then(
                res => {
                    fetchScore();
                },
                err => {
                    console.error(err);
                }
            );
        };

        // show modals
        $scope.showIndicatorLevelsModal = ev => {
            $mdDialog.show({
                templateUrl: "views/modal-indicatorLevels.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $scope.showDeleteScoreModal = ev => {
            $mdDialog.show({
                locals: { score: $scope.score },
                controller: ModalController,
                templateUrl: "views/modal-deleteScore.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $scope.showSubmitScoreModal = ev => {
            $mdDialog.show({
                locals: { score: $scope.score },
                controller: ModalController,
                templateUrl: "views/modal-submitScore.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $scope.showAttachEvidenceModal = (ev, indicator) => {
            IndicatorScoreService.query(
                { id: indicator.indicatorScore.id },
                res => {
                    $mdDialog.show({
                        locals: {
                            indicatorScore: res.data,
                            observations,
                            teacher
                        },
                        controller: AttachEvidenceController,
                        templateUrl: "views/modal-attachEvidence.html",
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    });
                },
                err => {
                    console.error(err);
                }
            );
        };

        function ModalController(
            $scope,
            $mdDialog,
            $state,
            ScoreService,
            score
        ) {
            $scope.cancelDeleteScore = () => {
                $mdDialog.cancel();
            };

            $scope.cancelSubmitScoreModal = () => {
                $mdDialog.cancel();
            };

            $scope.submitScore = ev => {
                $mdDialog.show({
                    templateUrl: "views/modal-submittedScoreToast.html",
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
                setTimeout(() => {
                    $mdDialog.hide();
                    let transitionTo = localStorage.getItem("scoreParentRoute");
                    if (transitionTo == "teacher") {
                        $state.go(transitionTo, {
                            teacherId: score.teacher_id
                        });
                    } else {
                        $state.go(transitionTo);
                    }
                }, 2000);
            };

            $scope.deleteScore = () => {
                ScoreService.remove(
                    {
                        id: score.id
                    },
                    res => {
                        $mdDialog.hide();
                        $state.go("home");
                    }
                );
            };
        }

        function AttachEvidenceController(
            $scope,
            $mdDialog,
            observations,
            indicatorScore,
            teacher,
            IndicatorScoreService,
            AttachEvidenceService
        ) {
            $scope.indicatorScore = indicatorScore;
            $scope.teacher = teacher;
            // Reset First
            observations.map(observation => {
                observation.attachments.map(attachment => {
                    attachment.toggle = false;
                });
            });

            observations.map(observation => {
                return observation.attachments.map(attachment => {
                    indicatorScore.evidences.map(evidence => {
                        if (attachment.id === evidence.id) {
                            attachment.toggle = true;
                        }
                    });
                });
            });

            console.log(observations)

            $scope.observations = observations;

            $scope.selectAttachment = (e, attachment) => {
                attachment.toggle
                    ? angular.element(e.target).css("opacity", "0")
                    : angular.element(e.target).css("opacity", "1");

                attachment.toggle = attachment.toggle ? false : true;

                attachment.toggle
                    ? AttachEvidenceService.createIndicatorScoreEvidence({
                          observation_evidence_id: attachment.id,
                          indicator_score_id: indicatorScore.id
                      }).then(
                          res => {},
                          err => {
                              console.error(err);
                          }
                      )
                    : AttachEvidenceService.deleteIndicatorScoreEvidence({
                          observation_evidence_id: attachment.id,
                          indicator_score_id: indicatorScore.id
                      }).then(
                          res => {},
                          err => {
                              console.error(err);
                          }
                      );
            };

            $scope.attachNote = () => {
                IndicatorScoreService.createIndicatorScore({
                    note: indicatorScore.note,
                    score_id: indicatorScore.score.id,
                    indicator_id: indicatorScore.indicator.id
                }).then(
                    res => {},
                    err => {
                        console.error(err);
                    }
                );
            };

            $scope.attachEvidence = () => {
                $mdDialog.cancel();
            };

            $scope.closeModal = () => {
                $mdDialog.cancel();
            };

            $scope.isDocument = fileName => UtilService.isDocument(fileName);

            $scope.isImage = fileName => UtilService.isImage(fileName);

            $scope.isVideo = fileName => UtilService.isVideo(fileName);
        }
    }
];
