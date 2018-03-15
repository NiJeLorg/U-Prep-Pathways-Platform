'use strict';

const ScoreInputCtrl = ($scope, $state, $rootScope, UtilService, TeacherService, BreadcrumbFactory, ScoreFactory) => {


    $scope.templateUrl = `views/breadcrumbs/breadcrumbs.html`;

    $scope.breadcrumbs = BreadcrumbFactory;
    // fetch data
    $scope.grades = ScoreFactory.teacher.grades;
    $scope.subjects = ScoreFactory.teacher.subjects;
    $scope.disableSubjectSelect = true;

    $scope.recordGrade = () => {
        ScoreFactory['grade'] = JSON.parse($scope.grade);
        if(ScoreFactory.grade){
            $scope.subjects =  ScoreFactory.teacher.subjects.filter(
                subject => subject.grade.grade_id === ScoreFactory.grade.id
            )
            $scope.disableSubjectSelect = false;
        }
    };
    $scope.recordSubject = () => {
        ScoreFactory['subject'] = JSON.parse($scope.subject);
    };

    $scope.cancel = () =>{
        UtilService.cancelScore(ScoreFactory);
    };
};

export default ScoreInputCtrl;
