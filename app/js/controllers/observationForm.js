const ObservationFormCtrl = ($scope, $rootScope, $state, TestData) => {
    $rootScope.data = TestData;
    $scope.form = {};
    $scope.goToClustersObservedView = () => {
        $rootScope.observation.form = $scope.form;
        $state.go('clustersObserved');
    };

};

export default ObservationFormCtrl;
