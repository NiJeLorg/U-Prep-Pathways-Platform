'use strict';
const HomeCtrl = ($scope, $state, ObservationService, SchoolService, UtilService) => {

    let observationToBeDeleted;
    $scope.page = 'observed';

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

    // event handlers
    $scope.filterObservationsBySchool = () => {
        // console.log($scope.selectedSchool, 'school');
    }

    $scope.openModal = (observation) => {
        UtilService.openModal('delete-observation-modal');
        observationToBeDeleted = observation;
    };

    $scope.closeModal = () => {
        UtilService.closeModal('delete-observation-modal');
    };

    $scope.deleteObservation = () => {
        let index;
        ObservationService.remove({
            id: observationToBeDeleted.id
        }, (res) => {
            index = $scope.observations.findIndex((elem) => {
                if (elem.id == observationToBeDeleted.id) {
                    return elem;
                }
            });
            $scope.observations.splice(index, 1);
            UtilService.closeModal('delete-observation-modal');
        });
    };

    $scope.editOrViewObservation = (observation, action) => {
        $state.go('observationForm', {
            observationId: observation.id,
            action, action
        });
    };


    $scope.scores = [{
        scoreKind: 'Teacher',
        readableDate: '11/13/17',
        scoreName: 'Mr.Martin',
        scoreTime: '1st Score'
    }, {
        scoreKind: 'Teacher',
        readableDate: '11/13/17',
        scoreName: 'Ms.Andrews',
        scoreTime: '3rd Score'
    }, {
        scoreKind: 'Schoolwide',
        readableDate: '11/13/17',
        scoreName: 'Ellen Thompson Elementary',
        scoreTime: '1st Score'
    }];
};

export default HomeCtrl;