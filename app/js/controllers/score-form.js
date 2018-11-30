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

        const fetchScore = () => {
            ScoreService.query({
                id: $stateParams.scoreId
            }).$promise.then(res => {
                $scope.score = res.data;
            });
        };

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
            let indicators_mapped = indicators.map(indicator => {
                let matched_indicator = $scope.score.indicator_scores.filter(
                    indicator_score =>
                        indicator_score.indicator_id === indicator.id
                );
                if (matched_indicator.length > 0) {
                    indicator.value = "" + matched_indicator[0].value;
                }
                return indicator;
            });
            // console.log(indicators_mapped);
            return indicators_mapped;
        };
        $scope.checkIndicatorScore = (indicator, value) => {
            let matched_indicator_score = $scope.score.indicator_scores.filter(
                indicator_score => indicator_score.indicator_id === indicator.id
            );
            return false;
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
            $mdDialog.show({
                locals: {
                    score: $scope.score,
                    indicator,
                    teacher,
                    observations
                },
                controller: AttachEvidenceController,
                templateUrl: "views/modal-attachEvidence.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
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
            indicator,
            teacher,
            observations,
            IndicatorScoreService
        ) {
            $scope.indicator = indicator;
            $scope.teacher = teacher;
            $scope.observations = observations;

            $scope.selectAttachment = (e, attachment) => {
                attachment.toggle
                    ? angular.element(e.target).css("opacity", "0")
                    : angular.element(e.target).css("opacity", "1");
                attachment.toggle = attachment.toggle ? false : true;
            };

            $scope.closeModal = () => {
                $mdDialog.cancel();
            };

            $scope.attachEvidence = () => {
                IndicatorScoreService.update(
                    {
                        
                    },
                    res => {
                        console.log(res);
                    },
                    err => {
                        console.error(err);
                    }
                );
            };

            $scope.isDocument = fileName => UtilService.isDocument(fileName);

            $scope.isImage = fileName => UtilService.isImage(fileName);

            $scope.isVideo = fileName => UtilService.isVideo(fileName);
        }
    }
];
