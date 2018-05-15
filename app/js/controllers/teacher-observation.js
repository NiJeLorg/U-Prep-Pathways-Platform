'use strict';

const TeacherObservationCtrl = ($scope, $state, UtilService, ObservationService, ObservationTypeService, ObservationFactory, ScoreFactory, teacher) => {
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
        ObservationFactory['teacher'] = {
            id: teacher.id,
            name: teacher.name
        };
        ObservationFactory['school'] = teacher.school;
        ObservationFactory['observationType'] = $scope.observationTypes[1];
        ObservationFactory['grades'] = teacher.grades;
        ObservationFactory['subjects'] = teacher.subjects;
        $state.go('observationInputs', {
            workflow: 'observations'
        });
    };

    $scope.newTeacherScore = (teacher) => {
        ScoreFactory['teacher'] = {
            id: teacher.id,
            name: teacher.name
        };
        ScoreFactory['school'] = teacher.school;
        ScoreFactory['grades'] = teacher.grades;
        ScoreFactory['subjects'] = teacher.subjects;
        $state.go('scoreDetails', {
            workflow: 'scores'
        });
    };


    $scope.editObservation = (observation) => {
        $state.go('observationForm', {
            observationId: observation.id,
        });
    }

    $scope.editScore = (score) => {
        $state.go('scoreForm', {
            scoreId: score.id,
        });
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
            index = $scope.teacher.observations.findIndex((elem) => {
                if (elem.id == observationToBeDeleted.id) {
                    return elem;
                }
            });
            $scope.teacher.observations.splice(index, 1);
            UtilService.closeModal('delete-observation-modal');
        });
    };
};

export default TeacherObservationCtrl;