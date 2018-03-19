'use strict';

const ScoreFormCtrl = ($scope, $state, $stateParams, $timeout, score, ElementService, UtilService, ScoreFactory, ) => {

    // $scope.teacher = ScoreFactory.teacher;
    // $scope.grade = ScoreFactory.grade;
    // $scope.subject = ScoreFactory.subject;

    $scope.score = score.data;

    ElementService.fetchElements((err, res) => {
        if (!err) {
            $scope.elements = res.data.data;
            console.log($scope.elements, 'yoo');
        } else {
            console.error(err, res.data);
        }
    });

    // event listeners
    $scope.displayIndicatorLevelsModal = (indicator) => {
        UtilService.openModal('indicator-levels-modal');
    }


};


export default ScoreFormCtrl;