'use strict';
const HomeCtrl = ($scope, $state, ObservationService, SchoolService) => {


    let observationToBeDeleted;

    // fetch data
    ObservationService.fetchObservations((err, res) => {
        if (!err) {
            $scope.observations = res.data.data;
            console.log($scope.observations, 'observations');
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

    $scope.openModal = (observation) => {
        angular.element(document.getElementsByClassName('delete-observation-modal')).css('display', 'flex');
        observationToBeDeleted = observation;
    };

    $scope.closeModal = () => {
        angular.element(document.getElementsByClassName('delete-observation-modal')).css('display', 'none');
    };

    $scope.deleteObservation = () => {
        ObservationService.remove({
            id: observationToBeDeleted.id
        }, (res) => {
            angular.element(document.getElementsByClassName('delete-observation-modal')).css('display', 'none');
            $state.reload();
        });
    };

    $scope.editObservation = (observation) => {
        $state.go('observationForm', {
            observationId: observation.id,
            observation: observation
        });
    };
};

export default HomeCtrl;
