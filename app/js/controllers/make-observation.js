const MakeObservationCtrl = ($scope, $state, SchoolService, ObservationTypeService) => {


    $scope.cancelObservation = () => {
        $scope.observation = {};
        $state.go('home');
    };

    // fetch data
    SchoolService.fetchSchools((err, res) => {
        if (err) {
            console.error(err);
        }
        $scope.schools = res.data.data;
    });

    ObservationTypeService.get((res) => {
        $scope.observationTypes = res.data;
    });

};

export default MakeObservationCtrl;
