'use strict';

const TeacherCtrl = ($scope, $state, UtilService, ObservationService, ObservationTypeService, ObservationFactory, ScoreFactory, teacher) => {
    $scope.teacher = teacher.data;
    let observationToBeDeleted;
    $scope.subview = 'observations';

    ObservationTypeService.fetchObservationTypes((err, res) => {
        if (!err) {
            $scope.observationTypes = res.data.data;
        } else {
            console.error(err, 'ERROR');
        }
    });

    $scope.newTeacherObservation = (teacher) => {
        ObservationFactory.teacher = teacher;
        ObservationFactory['observationType'] = $scope.observationTypes[1];
        $state.go('observationInputs', {workflow: 'observations'});
    };

    $scope.newTeacherScore = (teacher) => {
       ObservationFactory.teacher = teacher;
        $state.go('scoreDetails', {workflow: 'scores'});
    };

    $scope.editObservation = (observation) => {
        $state.go('observationForm', {observationId: observation.id});
    }

    $scope.editScore = (score) => {
        $state.go('scoreForm', {scoreId: score.id});
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
            index = $scope
                .teacher
                .observations
                .findIndex((elem) => {
                    if (elem.id == observationToBeDeleted.id) {
                        return elem;
                    }
                });
            $scope
                .teacher
                .observations
                .splice(index, 1);
            UtilService.closeModal('delete-observation-modal');
        });
    };
};

export default TeacherCtrl;