export default [
    "$scope",
    "$state",
    "UtilService",
    "ObservationService",
    "ObservationTypeService",
    "ScoreService",
    "ObservationFactory",
    "ScoreFactory",
    "teacher",
    function(
        $scope,
        $state,
        UtilService,
        ObservationService,
        ObservationTypeService,
        ScoreService,
        ObservationFactory,
        ScoreFactory,
        teacher
    ) {
        $scope.teacher = teacher.data;
        $scope.toBeDeleted = {};
        $scope.subview = "observations";

        ObservationTypeService.fetchObservationTypes().then(
            res => {
                $scope.observationTypes = res.data.data;
            },
            err => {
                console.error(err);
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

        $scope.openDeleteModal = (obj, type) => {
            UtilService.openModal("delete-modal");
            $scope.toBeDeleted = {
                obj,
                type
            };
        };

        $scope.closeModal = () => {
            UtilService.closeModal("delete-modal");
        };

        $scope.deleteObject = () => {
            let index;
            $scope.toBeDeleted.type === "observation"
                ? ObservationService.remove(
                      {
                          id: $scope.toBeDeleted.obj.id
                      },
                      res => {
                          index = $scope.teacher.observations.findIndex(
                              elem => {
                                  if (elem.id == $scope.toBeDeleted.obj.id) {
                                      return elem;
                                  }
                              }
                          );
                          $scope.teacher.observations.splice(index, 1);
                      }
                  )
                : ScoreService.delete(
                      {
                          id: $scope.toBeDeleted.obj.id
                      },
                      res => {
                          index = $scope.teacher.scores.findIndex(elem => {
                              if (elem.id == $scope.toBeDeleted.obj.id) {
                                  return elem;
                              }
                          });
                          $scope.teacher.scores.splice(index, 1);
                      }
                  );

            UtilService.closeModal("delete-modal");
        };
    }
];
