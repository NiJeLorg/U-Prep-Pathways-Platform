const MakeObservationCtrl = ($scope, $state, SchoolService, ObservationTypeService) => {


    $scope.cancelObservation = () => {
        $scope.observation = {};
        $state.go('home');
    };

    $scope.checkIfSchoolIsUPSM = (school) => {
        if (school.includes('UPSM')) {
            return true;
        }
        return false;
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
