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

    // event listeners
    $scope.displayIndicatorLevelsModal = (indicator)=> {
        UtilService.openModal('indicator-levels-modal');
    }


};


export default ScoreFormCtrl;
