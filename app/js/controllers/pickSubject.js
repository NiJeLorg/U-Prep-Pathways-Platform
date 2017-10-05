const PickSubjectCtrl = ($scope, $rootScope, $state, TestData) => {
    $rootScope.data = TestData;
    $scope.pickSubject = (subject) => {
        $rootScope.observation.subject = subject;
        $state.go('pickObservationKind');
    };
};

export default PickSubjectCtrl;
