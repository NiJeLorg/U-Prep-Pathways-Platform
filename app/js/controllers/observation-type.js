'use strict';

const ObservationTypeCtrl = ($scope, UtilService, ObservationTypeService, ObservationFactory, BreadcrumbFactory) => {

    // fetch data
    $scope.templateUrl = `views/breadcrumbs/breadcrumbs.html`;
    $scope.breadcrumbs = BreadcrumbFactory;

    $scope.cancel = () =>{
        UtilService.cancelObservation(ObservationFactory);
    };

    ObservationTypeService.fetchObservationTypes((err, res) => {
        if (!err) {
            $scope.observationTypes = res.data.data;
        } else {
            console.error(err, 'ERROR');
        }
    });

    $scope.recordObservationType = (observationType) => {
        ObservationFactory['observationType'] = observationType;
    };


};

export default ObservationTypeCtrl;
