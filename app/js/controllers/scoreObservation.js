'use strict';

const ScoreObservationCtrl = ($scope, $state, $mdDialog, TestData) => {

    $scope.data = TestData;
    $scope.observation = {};

    $scope.isReadonly = false;
    $scope.changeOnHover = false;
    $scope.maxValue = 4;
    $scope.ratingValue = 0;

    $scope.recordObservation = (key, value) => {
        $scope.observation[key] = value;
        // console.log(key, 'key');
        // if (key === 'teacher') {
        //     $state.go('scoreObservation.scoreBase');
        // }
    };

    $scope.filterGrades = (grade) => {
        const levelGrades = {
            elementary: ['Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'],
            middle: ['6th Grade', '7th Grade', '8th Grade'],
            high: ['9th Grade', '10th Grade', '11th Grade', '12th Grade']
        };
        let schoolLevel = $scope.observation.school.split(' ').pop().toLowerCase();
        for (let prop in levelGrades) {
            if (prop == schoolLevel) {
                for (let i = 0; i < levelGrades[prop].length; i++) {
                    if (levelGrades[schoolLevel][i] == grade) {
                        return true;
                    }
                }
            }
        }
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
        console.log(indicator, 'yoo');
    };
};

export default ScoreObservationCtrl;
