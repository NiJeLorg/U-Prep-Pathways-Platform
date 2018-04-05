'use strict';
const HomeCtrl = ($scope, $state, TeacherService, PaginationFactory) => {

    $scope.page = 'dashboard';
    $scope.pager = {};

    // fetch data
    TeacherService.fetchAllTeachers((err, res) => {
        if (!err) {
            $scope.teachers = res.data.data
        } else {
            console.error(err, 'ERROR');
        }
    });

    // event handlders
    $scope.newTeacherScore = (teacher) => {
       
    };

    $scope.newTeacherObservation = (teacher) => {

    };

};

export default HomeCtrl;