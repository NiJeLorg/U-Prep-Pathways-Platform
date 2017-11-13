'use strict';

import moment from 'moment';

const ScoreObservationCtrl = ($scope, $state, $mdDialog, TestData, DataService) => {

    $scope.data = TestData;
    $scope.observation = {};

    // global rating variables
    $scope.rate = 0;
    $scope.max = 4;
    let indicatorRatings = [];


    $scope.rateIndicator = (indicator, rating) => {
        const obj = {
            indicator: indicator,
            rating: rating
        };
        if (!checkIfObjectExistsInArray(indicatorRatings, obj, 'indicator')) {
            indicatorRatings.push(obj);
        } else {
            updateObjectInArray(indicatorRatings, obj, 'indicator');
        }
    };

    $scope.cancelIndicatorRating = (state, indicator) => {
        if (!state) {
            removeObjectFromArray(indicatorRatings, indicator, 'indicator');
        }
    };

    function checkIfObjectExistsInArray(arr, obj, objectProperty) {
        let state = false;
        if (arr.length > 0) {
            arr.forEach((elem, index) => {
                if (elem[objectProperty] === obj[objectProperty]) {
                    state = true;
                }
            });
        }
        return state;
    }

    function updateObjectInArray(arr, obj, objectProperty) {
        arr.forEach((elem, index) => {
            if (elem[objectProperty] === obj[objectProperty]) {
                arr[index] = obj;
            }
        });
    }

    function removeObjectFromArray(arr, propertyValue, objectProperty) {
        arr.map((elem, index) => {
            if (elem[objectProperty] === propertyValue) {
                arr.splice(index, 1);
            }
        });
    }


    $scope.attachEvidence = (component, indicator) => {
        $state.go('scoreObservation.attachEvidence');
        $scope.observation.component = component.name;
        $scope.observation.indicator = indicator;
    };




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
        $scope.indicatorRating = rating;
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

    DataService.$loaded((obj) => {
        obj.map((observation, index) => {
            observation.readableDate = moment(observation.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        });
        $scope.observations = obj;
    });
};

export default ScoreObservationCtrl;
