import moment from 'moment';


const HomeCtrl = ($scope, $rootScope, $state, $firebaseObject, $firebaseArray, DataService, TestData) => {
    $scope.observations = DataService;

    $scope.observations.$loaded(function () {
        $scope.savedObservations = $scope.observations;
        $scope.savedObservations.map(function (observation, index) {
            let createdTime = new Date(observation.createdAt);
            observation.readableDate = moment(createdTime).format('MMMM Do YYYY, h:mm:ss a');
        });g
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
