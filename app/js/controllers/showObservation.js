const ShowObservationCtrl = ($scope, $rootScope, $state, $stateParams, TestData, DataService) => {
    let observations = DataService;
    $scope.observation = observations.$getRecord($stateParams.id);
};

export default ShowObservationCtrl;
