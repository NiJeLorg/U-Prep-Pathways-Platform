'use strict';

const SchoolCtrl = ($scope, $state, $rootScope, UtilService, SchoolService, ObservationFactory) => {

    $rootScope.observation = ObservationFactory;

    // fetch data
    SchoolService.fetchSchools((err, res) => {
        if (err) {
            console.error(err);
        }
        $scope.schools = res.data.data;
    });

    $scope.checkIfSchoolIsUPSM = (school) => {
        if (school.includes('UPSM')) {
            return true;
        }
        return false;
    };

    $scope.recordSchool = (school) => {
        ObservationFactory['school'] = school;
        $state.go('observationType');
    };

    $scope.cancelObservation = () => {
        UtilService.cancelObservation(ObservationFactory);
    };

};

export default SchoolCtrl;
