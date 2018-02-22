'use strict';

const SchoolCtrl = ($scope, $state, $rootScope, UtilService, SchoolService, ObservationFactory, workflow) => {

    $rootScope.observation = ObservationFactory;
    $scope.templateUrl = `views/breadcrumbs/${workflow}.html`;


    // fetch data
    SchoolService.fetchSchools((err, res) => {
        if (err) {
            console.error(err);
        }
        $scope.schools = res.data.data;
    });

    $scope.getTitle = () => {
        if(workflow === 'observations'){
            return 'Make an Observation';
        }
        return 'Score an Observation';
    };

    $scope.cancel = () =>{
        if(workflow === 'observations'){
            UtilService.cancelObservation(ObservationFactory);
        }else{
            UtilService.cancelScore();
        }
    };
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
