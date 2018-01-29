import observationFactory from "../factories/observation-factory";

'use strict';

const ObservationInputsCtrl = ($scope, GradeService, TeacherService, ObservationFactory) => {

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
        ObservationFactory['grade'] = JSON.parse($scope.grade);

        TeacherService.query({
            schoolId: ObservationFactory.school.id,
            gradeId: ObservationFactory.grade.id
        }, (res) => {
            $scope.teachers = res.data;
        });

        // disalbe teacher select
        $scope.disableTeacherSelect = false;
    };

    $scope.recordTeacher = () => {
        ObservationFactory['teacher'] = JSON.parse($scope.teacher);

        TeacherService.fetchTeacher(ObservationFactory.teacher.id, ObservationFactory.school.id, ObservationFactory.grade.id, (err, res) => {
            if (!err) {
                $scope.subjects = res.data.data.subjects;
            } else {
                console.log(err, 'errr');
            }
        });

        // disalbe subject select
        $scope.disableSubjectSelect = false;
    };


    $scope.recordSubject = () => {
        ObservationFactory['subject'] = JSON.parse($scope.subject);

        console.log(ObservationFactory, 'observe');
    }






};

export default ObservationInputsCtrl;
