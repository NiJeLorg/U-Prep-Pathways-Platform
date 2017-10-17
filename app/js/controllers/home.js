const HomeCtrl = ($scope, $rootScope, $state, $firebaseObject, $firebaseArray, DataService, TestData) => {
    $scope.observations = DataService;

    $scope.observations.$loaded(function () {
        $scope.savedObservations = $scope.observations;
        $scope.savedObservations.map(function (observation, index) {
            observation.readableDate = new Date(observation.createdAt).toString();
        });
    });

    $scope.observationType = function (type) {
        if (type === 'Making Observations') {
            $state.go('newObservation');
        } else {
            $state.go('scoreObservation');
        }
        $rootScope.observationType = type;
    };

    $scope.showObservation = function (observation) {
        $state.go('showObservation', {
            id: observation.$id
        });
    };
};

export default HomeCtrl;
