export default [
    "$scope",
    "$state",
    "$timeout",
    "observation",
    "Upload",
    "ObservationTypeService",
    "ObservationService",
    "AttachmentService",
    "UtilService",
    function(
        $scope,
        $state,
        $timeout,
        observation,
        Upload,
        ObservationTypeService,
        ObservationService,
        AttachmentService,
        UtilService
    ) {
        $scope.selectedDomain = window.location.origin;
        // Progress Bar
        $scope.progressBarActive = false;
        $scope.observation = observation.data;
        $scope.editObservationName = false;
        $scope.isImage;
        $scope.selectedImageUrl;
        $scope.attachmentFormat;

        console.log($scope.observation);
        // fetch data
        ObservationTypeService.get(
            {
                id: $scope.observation.observation_type_id
            },
            res => {
                $scope.observationTypeProperties = res.data.observation_type_properties.map(
                    observationProperty => {
                        observation.data.properties_data.map(
                            observationData => {
                                if (
                                    observationProperty.id ==
                                    observationData.observation_type_property_id
                                ) {
                                    observationProperty.value =
                                        observationData.value;
                                    observationProperty.observationDataId =
                                        observationData.id;
                                }
                            }
                        );
                        return observationProperty;
                    }
                );
            },
            err => {
                console.error(err);
            }
        );

        $scope.checkIfAttacmentIsImage = file => UtilService.isImage(file.name);

        $scope.checkIfAttacmentIsDocument = file =>
            UtilService.isDocument(file.name);

        $scope.checkIfAttacmentIsVideo = file => UtilService.isVideo(file.name);

        $scope.selectAttachment = attachment => {
            $scope.selectedImageUrl = attachment.name;

            angular
                .element(document.getElementsByClassName("c-light-box-overlay"))
                .css("display", "block");
            angular
                .element(document.getElementsByClassName("c-light-box"))
                .css("display", "flex");
        };

        angular
            .element(document.getElementsByClassName("c-light-box-overlay"))
            .on("click", function() {
                angular
                    .element(
                        document.getElementsByClassName("c-light-box-overlay")
                    )
                    .css("display", "none");
                angular
                    .element(document.getElementsByClassName("c-light-box"))
                    .css("display", "none");
                $scope.selectedImageUrl = "";
            });

        $scope.upload = file => {
            $scope.progressBarActive = true;
            Upload.upload({
                url: `/api/observations/${$scope.observation.id}`,
                method: "PUT",
                data: {
                    attachments: file
                }
            }).then(
                res => {
                    // console.log(res, "res");
                    $scope.observation.attachments = res.data.data.attachments;

                    $scope.progressBarActive = false;
                },
                err => {
                    console.log(err);
                }
            );
        };

        $scope.deleteObservation = () => {
            ObservationService.remove(
                {
                    id: $scope.observation.id
                },
                res => {
                    UtilService.closeModal("delete-observation-modal");
                    $state.go("home");
                }
            );
        };

        $scope.editObservation = () => {
            ObservationService.update(
                {
                    id: $scope.observation.id
                },
                {
                    grade_id: $scope.observation.grade.id,
                    teacher_id: $scope.observation.teacher.id,
                    subject_id: $scope.observation.subject.id
                },
                res => {
                    UtilService.closeModal("edit-observation-modal");
                },
                err => {
                    UtilService.closeModal("edit-observation-modal");
                }
            );
        };

        $scope.getPropertyData = () => {
            return $scope.observationTypeProperties.map(property => {
                return {
                    id: property.observationDataId,
                    observation_type_property_id: property.id,
                    value: property.value,
                    observation_id: $scope.observation.id
                };
            });
        };

        $scope.getObservationTypePropertyVal = id => {
            const property = $scope.observation.observation_type_property_data.filter(
                property => {
                    return property[id];
                }
            );
            if (property.length > 0) {
                return property[0][id];
            }
            return "";
        };

        $scope.submitObservation = status => {
            ObservationService.update(
                {
                    id: $scope.observation.id
                },
                {
                    name: $scope.observation.name,
                    description: $scope.observation.description,
                    status: status,
                    observation_type_property_data: $scope.getPropertyData()
                },
                res => {
                    UtilService.closeModal("submit-observation-modal");
                    UtilService.openModal("submitted-observation-modal");
                    $timeout(() => {
                        UtilService.closeModal("submitted-observation-modal");
                        let transitionTo = localStorage.getItem(
                            "observationParentRoute"
                        );
                        if (transitionTo == "teacher") {
                            $state.go(transitionTo, {
                                teacherId: $scope.observation.teacher_id
                            });
                        } else {
                            $state.go(transitionTo);
                        }
                    }, 4000);
                },
                err => {
                    console.log(err, "err");
                }
            );
        };

        $scope.removeAttachment = (obj, file) => {
            obj.forEach((elem, index) => {
                if (elem.name === file.name) {
                    obj.splice(index, 1);
                }
            });

            AttachmentService.delete(
                {
                    id: file.id
                },
                res => {},
                err => {
                    console.error(err, "ERROR");
                }
            );
        };

        $scope.openSubmitObservationModal = () => {
            UtilService.openModal("submit-observation-modal");
        };

        $scope.closeSubmitObservationModal = () => {
            UtilService.closeModal("submit-observation-modal");
        };

        $scope.openEditObservationModal = () => {
            UtilService.openModal("edit-observation-modal");
        };

        $scope.closeEditObservationModal = () => {
            UtilService.closeModal("edit-observation-modal");
        };

        $scope.openDeleteModal = () => {
            UtilService.openModal("delete-observation-modal");
        };

        $scope.closeDeleteModal = () => {
            UtilService.closeModal("delete-observation-modal");
        };
    }
];
