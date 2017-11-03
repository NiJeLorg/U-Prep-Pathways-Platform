const ShowObservationCtrl = ($scope, $rootScope, $state, $stateParams, TestData, DataService) => {
    let observations = DataService;
    $scope.observation = observations.$getRecord($stateParams.id);
    $scope.toggleEditObservation = false;

    $scope.editObservation = () => {
        $scope.toggleEditObservation = true;
    };
};

export default ShowObservationCtrl;
