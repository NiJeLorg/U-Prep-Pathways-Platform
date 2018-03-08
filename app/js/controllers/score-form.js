'use strict';

const ScoreFormCtrl = ($scope, $state, $stateParams, $timeout, ElementService, UtilService, ScoreFactory,) => {

    $scope.teacher = ScoreFactory.teacher;
    $scope.grade = ScoreFactory.grade;
    $scope.subject = ScoreFactory.subject;
    ElementService.fetchElements((err, res) => {
        if (!err) {
            $scope.elements = res.data.data;
        } else {
            console.error(err, res.data);
        }
    });


};


export default ScoreFormCtrl;
