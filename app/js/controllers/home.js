'use strict';

import moment from 'moment';

const HomeCtrl = ($scope, $rootScope, $state, DataService) => {

    DataService.$loaded((obj) => {
        obj.map((observation, index) => {
            observation.readableDate = moment(observation.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        });
        $scope.observations = obj;
    });

    $scope.observationType = function (type) {
        $rootScope.observationType = type;
    };

    $scope.showObservation = function (observation) {
        $state.go('showObservation', {
            id: observation.$id
        });
    };
};

export default HomeCtrl;
