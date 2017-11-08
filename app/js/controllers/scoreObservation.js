'use strict';

const ScoreObservationCtrl = ($scope, $state, $mdDialog, TestData) => {

    $scope.data = TestData;
    $scope.observation = {};

    $scope.rate = 7;
    $scope.max = 4;
    $scope.isReadonly = false;

    $scope.recordObservation = (key, value) => {
        $scope.observation[key] = value;
    };

    $scope.filterGrades = (grade) => {
        return $scope.observation.school.split(' ').pop().toLowerCase();
    };

    $scope.pickScoreBase = (score) => {
        $scope.observation.scoreBase = score;
        if (score === 'Score by elements') {
            $state.go('scoreObservation.element');
        }
    };

    $scope.pickElement = (element) => {
        $scope.observation.element = element;
        $state.go('scoreObservation.component');
    };

    $scope.setRatingForIndicator = (indicator, rating) => {
        console.log(indicator, rating);
    };

    $scope.showLevelInformationForIndicatorDialog = (ev, indicator) => {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.body))
            .clickOutsideToClose(true)
            .title(indicator)
            .textContent('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
        );
    };
};

export default ScoreObservationCtrl;
