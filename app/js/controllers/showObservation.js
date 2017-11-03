const ShowObservationCtrl = ($scope, $rootScope, $state, $stateParams, TestData, DataService) => {
    let observations = DataService;
    $scope.observation = observations.$getRecord($stateParams.id);
    $scope.toggleEditObservation = false;

    $scope.editObservation = () => {
        $scope.toggleEditObservation = true;
        $scope.editedObservation = angular.copy($scope.observation);
    };

    $scope.cancelEditingObservation = () => {
        $scope.toggleEditObservation = false;
    };

    $scope.submitEditedObservation = (obj) => {
        console.log(obj);
    };
};

export default ShowObservationCtrl;
