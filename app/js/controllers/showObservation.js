const ShowObservationCtrl = ($scope, $rootScope, $state, $stateParams, TestData, DataService) => {
    let observations = DataService;
    $scope.observation = observations.$getRecord($stateParams.id);

    $scope.editObservation = () => {
        console.log('yay!');
    };
};

export default ShowObservationCtrl;
