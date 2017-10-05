const ClustersObservedCtrl = ($scope, $rootScope, $state, TestData, DataService) => {
    // $rootScope.data = TestData;

    $scope.observations = DataService;

    $scope.changeObservation = () => {
        console.log($rootScope.observation);
        $state.go('pickObservationKind');
        $scope.observations.$add($rootScope.observation);
    };

    $scope.changeSubject = () => {
        $state.go('pickSubject');
        $scope.observations.$add($rootScope.observation);
    }

    $scope.changeTeacher = () => {
        $state.go('pickTeacher');
        $scope.observations.$add($rootScope.observation);
    }

    $scope.changeSchool = () => {
        $state.go('pickSchool');
        $scope.observations.$add($rootScope.observation);
    };


};

export default ClustersObservedCtrl;
