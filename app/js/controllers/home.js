'use strict';
const HomeCtrl = ($scope, $state, ObservationService, ScoreService, SchoolService, UtilService, PaginationFactory) => {

    let resourceToBeDeleted,
        resourceType;

    $scope.page = 'observed';
    $scope.pager = {};



    // fetch data
    ObservationService.fetchObservations((err, res) => {
        if (!err) {
            let data = res.data.data;

            $scope.setPage = (page) => {
                if (page < 1 || page.totalPages) {
                    return;
                }
                $scope.pager = PaginationFactory.getPager(data.length, page);
                $scope.observations = data.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
            }

            // initialize to page 1
            $scope.setPage(1);

        } else {
            console.error(err, 'ERROR');
        }
    });

    ScoreService.fetchScores((err, res) => {
        if (!err) {
            $scope.scores = res.data.data;
        } else {
            console.error(err, 'ERROR');
        }
    });

    SchoolService.fetchSchools((err, res) => {
        if (err) {
            console.error(err);
        }
        $scope.schools = res.data.data;
    });


    $scope.openModal = (obj, type) => {
        UtilService.openModal('delete-observation-modal');
        resourceToBeDeleted = obj;
        resourceType = type;
    };

    $scope.closeModal = () => {
        UtilService.closeModal('delete-observation-modal');
    };


    $scope.deleteResource = () => {
        function findIndex(arr, obj) {
            let index = arr.findIndex((elem) => {
                if (elem.id == obj.id) {
                    return elem;
                }
            });
            return index;
        }

        if (resourceType === 'observation') {
            ObservationService.remove({
                id: resourceToBeDeleted.id
            }, (res) => {
                $scope.observations.splice(findIndex($scope.observations, resourceToBeDeleted), 1);
            });

        } else if (resourceType === 'score') {
            ScoreService.remove({
                id: resourceToBeDeleted.id
            }, (res) => {
                $scope.scores.splice(findIndex($scope.scores, resourceToBeDeleted), 1);
            });
        }
        UtilService.closeModal('delete-observation-modal');
    };

    $scope.editOrViewObservation = (observation, action) => {
        $state.go('observationForm', {
            observationId: observation.id,
            action,
            action
        });
    };


    $scope.editOrViewScore = (score, action) => {
        $state.go('scoreForm', {
            scoreId: score.id,
            action,
            action
        });
    };
};

export default HomeCtrl;