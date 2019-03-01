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
        $scope.observation = { ...observation.data };

        // $scope.selectedDomain = window.location.origin;
        // // Progress Bar
        // $scope.progressBarActive = false;
        // $scope.observation = observation.data;
        // $scope.editObservationName = false;
        // $scope.isImage;
        // $scope.selectedImageUrl;
        // $scope.attachmentFormat;
        // fetch data
        function fetchObservationType() {
            const id = $scope.observation.observation_type_id;
            ObservationTypeService.query(
                { id },
                res => {
                    const observationTypeProperties =
                        res.data.observation_type_properties;
                    setObservationTypeProperties(observationTypeProperties);
                },
                err => {
                    console.error(err);
                }
            );
        }
        fetchObservationType();

        function deleteObservation(id) {
            ObservationService.remove({ id }, res => {
                UtilService.closeModal("delete-observation-modal");
                $state.go("home");
            });
        }

        function updateObservation(id, data) {
            ObservationService.update(
                { id },
                data,
                res => {
                    openAndCloseSubmittedObservationModals();
                    transitionRouteAfterSubmittingObservation();
                },
                err => {
                    console.log(err, "err");
                }
            );
        }

        function setObservationTypeProperties(properties) {
            $scope.observationTypeProperties = properties;
        }

        function openAndCloseSubmittedObservationModals() {
            UtilService.closeModal("submit-observation-modal");
            UtilService.openModal("submitted-observation-modal");
        }

        function transitionRouteAfterSubmittingObservation() {
            const teacherId = $scope.observation.teacher_id;
            let transitionTo = localStorage.getItem("observationParentRoute");
            $timeout(() => {
                UtilService.closeModal("submitted-observation-modal");
                if (transitionTo == "teacher") {
                    $state.go(transitionTo, {
                        teacherId
                    });
                } else {
                    $state.go(transitionTo);
                }
            }, 3000);
        }

        $scope.setObservationStatus = flag => {
            // 1 sets a published status, whilst 0 sets it as draft === flag is the parameter
            $scope.observation.status = flag;
            let { id, name, status } = $scope.observation;
            updateObservation(id, { name, status });
        };

        // $scope.checkIfAttacmentIsImage = file => UtilService.isImage(file.name);

        // $scope.checkIfAttacmentIsDocument = file =>
        //     UtilService.isDocument(file.name);

        // $scope.checkIfAttacmentIsVideo = file => UtilService.isVideo(file.name);

        // $scope.selectAttachment = attachment => {
        //     $scope.selectedImageUrl = attachment.name;

        //     angular
        //         .element(document.getElementsByClassName("c-light-box-overlay"))
        //         .css("display", "block");
        //     angular
        //         .element(document.getElementsByClassName("c-light-box"))
        //         .css("display", "flex");
        // };

        // angular
        //     .element(document.getElementsByClassName("c-light-box-overlay"))
        //     .on("click", function() {
        //         angular
        //             .element(
        //                 document.getElementsByClassName("c-light-box-overlay")
        //             )
        //             .css("display", "none");
        //         angular
        //             .element(document.getElementsByClassName("c-light-box"))
        //             .css("display", "none");
        //         $scope.selectedImageUrl = "";
        //     });

        // $scope.upload = file => {
        //     $scope.progressBarActive = true;
        //     Upload.upload({
        //         url: `/api/observations/${$scope.observation.id}`,
        //         method: "PUT",
        //         data: {
        //             attachments: file
        //         }
        //     }).then(
        //         res => {
        //             // console.log(res, "res");
        //             $scope.observation.attachments = res.data.data.attachments;

        //             $scope.progressBarActive = false;
        //         },
        //         err => {
        //             console.log(err);
        //         }
        //     );
        // };

        $scope.deleteObservationHandler = () => {
            const id = $scope.observation.id;
            deleteObservation(id);
        };

        $scope.updateObservationHandler = () => {
            updateObservation();
        };

        // $scope.editObservation = () => {
        //     ObservationService.update(
        //         {
        //             id: $scope.observation.id
        //         },
        //         {
        //             grade_id: $scope.observation.grade.id,
        //             teacher_id: $scope.observation.teacher.id,
        //             subject_id: $scope.observation.subject.id
        //         },
        //         res => {
        //             UtilService.closeModal("edit-observation-modal");
        //         },
        //         err => {
        //             UtilService.closeModal("edit-observation-modal");
        //         }
        //     );
        // };

        // function getPropertyData() {
        //     return $scope.observationTypeProperties.map(property => {
        //         return {
        //             id: property.observationDataId,
        //             observation_type_property_id: property.id,
        //             value: property.value,
        //             observation_id: $scope.observation.id
        //         };
        //     });
        // }

        // $scope.getObservationTypePropertyVal = id => {
        //     const property = $scope.observation.observation_type_property_data.filter(
        //         property => {
        //             return property[id];
        //         }
        //     );
        //     if (property.length > 0) {
        //         return property[0][id];
        //     }
        //     return "";
        // };

        // $scope.submitObservation = status => {

        // };

        // $scope.removeAttachment = (obj, file) => {
        //     obj.forEach((elem, index) => {
        //         if (elem.name === file.name) {
        //             obj.splice(index, 1);
        //         }
        //     });

        //     AttachmentService.delete(
        //         {
        //             id: file.id
        //         },
        //         res => {},
        //         err => {
        //             console.error(err, "ERROR");
        //         }
        //     );
        // };

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
