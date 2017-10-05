const PickObservationKindCtrl = ($scope, $rootScope, $state, TestData) => {
    $rootScope.data = TestData;
    $scope.pickObservationKind = (kind) => {
        $rootScope.observation.observationKind = kind;
        $state.go('observationForm');
    };

};

export default PickObservationKindCtrl;
