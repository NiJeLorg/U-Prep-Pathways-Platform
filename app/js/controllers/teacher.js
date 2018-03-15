'use strict';

const TeacherCtrl = ($scope, $state, $rootScope, UtilService, TeacherService, BreadcrumbFactory, ScoreFactory) => {


    $scope.templateUrl = `views/breadcrumbs/breadcrumbs.html`;

    $scope.breadcrumbs = BreadcrumbFactory;
    // fetch data
    TeacherService.fetchSchoolTeachers(2, (err, res) => {
        if (err) {
            console.error(err);
        }
        console.log(res.data.data);
        $scope.teachers = res.data.data;
    });



    $scope.cancel = () =>{
        UtilService.cancelScore(ScoreFactory);
    };
    $scope.recordTeacher = (teacher) => {
        BreadcrumbFactory['label_2'] = teacher.name;
        ScoreFactory['teacher'] = teacher;
        $state.go('scoreDetails');
    };


};

export default TeacherCtrl;
