'use strict';

const HomeCtrl = ($scope, $rootScope, $state, $firebaseObject, $firebaseArray, DataService, TestData) => {

  $rootScope.observation = {};

  $scope.observations = DataService;

  $rootScope.data = TestData;

 $scope.observations.$loaded(()=> {
  $scope.savedObservations = $scope.observations;
 });

  $scope.observationType = (type) => {
    $rootScope.observation.observationType = type;
    $state.go('pickSchool');
  };

};


export default HomeCtrl;
