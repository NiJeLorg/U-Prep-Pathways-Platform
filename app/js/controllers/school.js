'use strict';

const SchoolCtrl = ($scope, $state, $rootScope, UtilService, SchoolService, ObservationFactory, BreadcrumbFactory,ScoreFactory,  workflow) => {

    $rootScope.observation = ObservationFactory;
    $scope.templateUrl = `views/breadcrumbs/breadcrumbs.html`;
    BreadcrumbFactory['workflow'] = workflow;
    BreadcrumbFactory['label_1'] = 'School';
    BreadcrumbFactory['label_3'] = 'Details';
    if(workflow === 'observations'){
        BreadcrumbFactory['label_2'] = 'Type';

    }else{
        BreadcrumbFactory['label_2'] = 'Teachers';
    }
    $scope.breadcrumbs = BreadcrumbFactory;
    // fetch data
    SchoolService.fetchSchools((err, res) => {
        if (err) {
            console.error(err);
        }
        $scope.schools = res.data.data;
    });



    $scope.cancel = () =>{
        if(workflow === 'observations'){
            UtilService.cancelObservation(ObservationFactory);
        }else{
            UtilService.cancelScore(ScoreFactory);
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
        ScoreFactory['school'] = school;
        BreadcrumbFactory['label_1'] = school.name;
        if(workflow === 'observations'){

            $state.go('observationType');
        }else{
            $state.go('teacher');
        }
    };



};

export default SchoolCtrl;
