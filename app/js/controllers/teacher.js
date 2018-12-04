export default [
    "$scope",
    "$state",
    "UtilService",
    "ObservationService",
    "ObservationTypeService",
    "ObservationFactory",
    "ScoreFactory",
    "teacher",
    function(
        $scope,
        $state,
        UtilService,
        ObservationService,
        ObservationTypeService,
        ObservationFactory,
        ScoreFactory,
        teacher
    ) {
        $scope.teacher = teacher.data;
        let observationToBeDeleted;
        $scope.subview = "observations";

        ObservationTypeService.fetchObservationTypes().then(
            res => {
                $scope.observationTypes = res.data.data;
            },
            err => {
                console.error(err, "ERROR");
            }
        );

        $scope.newTeacherObservation = teacher => {
            ObservationFactory.teacher = teacher;
            ObservationFactory["observationType"] = $scope.observationTypes[1];
            $state.go("observationInputs", { workflow: "observations" });
            localStorage.setItem("observationParentRoute", "teacher");
        };

        $scope.newTeacherScore = teacher => {
            ScoreFactory.teacher = teacher;
            $state.go("scoreDetails", { workflow: "scores" });
            localStorage.setItem("scoreParentRoute", "teacher");
        };

        $scope.editObservation = observation => {
            $state.go("observationForm", { observationId: observation.id });
            localStorage.setItem("observationParentRoute", "teacher");
        };

        $scope.editScore = score => {
            $state.go("scoreForm", { scoreId: score.id });
            localStorage.setItem("scoreParentRoute", "teacher");
        };

        $scope.openModal = observation => {
            UtilService.openModal("delete-observation-modal");
            observationToBeDeleted = observation;
        };

        $scope.closeModal = () => {
            UtilService.closeModal("delete-observation-modal");
        };

        $scope.deleteObservation = () => {
            let index;
            ObservationService.remove(
                {
                    id: observationToBeDeleted.id
                },
                res => {
                    index = $scope.teacher.observations.findIndex(elem => {
                        if (elem.id == observationToBeDeleted.id) {
                            return elem;
                        }
                    });
                    $scope.teacher.observations.splice(index, 1);
                    UtilService.closeModal("delete-observation-modal");
                }
            );
        };
    }
];
