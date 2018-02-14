'use strict';

const ObservationInputsCtrl = ($scope, $state, GradeService, $rootScope, UtilService, TeacherService, ObservationService, ObservationFactory) => {

    // fetch data
    GradeService.query({
        id: ObservationFactory.school.id
    }, (res) => {
        $scope.grades = res.data;
    });

    // disable teacher and subject select elements on load
    $scope.disableTeacherSelect = true;
    $scope.disableSubjectSelect = true;


    $scope.recordGrade = () => {
        if($scope.grade){
            ObservationFactory['grade'] = JSON.parse($scope.grade);
            TeacherService.query({
                schoolId: ObservationFactory.school.id,
                gradeId: ObservationFactory.grade.id
            }, (res) => {
                $scope.teachers = res.data;
            });

            // disable teacher select
            $scope.disableTeacherSelect = false;
        }

    };

    $scope.recordTeacher = () => {
        if($scope.teacher){
            ObservationFactory['teacher'] = JSON.parse($scope.teacher);
            TeacherService.fetchTeacher(ObservationFactory.teacher.id, ObservationFactory.school.id, ObservationFactory.grade.id, (err, res) => {
                if (!err) {
                    $scope.subjects = res.data.data.subjects;
                } else {
                    console.error(err, 'errr');
                }
            });

            // disalbe subject select
            $scope.disableSubjectSelect = false;
        }

    };


    $scope.recordSubject = () => {
        ObservationFactory['subject'] = JSON.parse($scope.subject);
    };


    $scope.createObservation = () => {

        if (ObservationFactory.grade && ObservationFactory.teacher && ObservationFactory.subject) {
            ObservationService.createObservation({
                school_id: ObservationFactory.school.id,
                grade_id: ObservationFactory.grade.id,
                subject_id: ObservationFactory.subject.id,
                teacher_id: ObservationFactory.teacher.id,
                observation_type_id: ObservationFactory.observationType.id
            }, (err, res) => {
                if (!err) {
                    ObservationService.query({
                        id: res.data.data.id
                    }, (res) => {
                        $state.go('observationForm', {
                            observationId: res.data.id
                        });
                    });
                }
            });
        } else {
            $scope.errorMessage = 'Make sure you select all the necessary fields'
        }
    };

    $scope.cancelObservation = () => {
        UtilService.cancelObservation(ObservationFactory);
    };


};

export default ObservationInputsCtrl;
