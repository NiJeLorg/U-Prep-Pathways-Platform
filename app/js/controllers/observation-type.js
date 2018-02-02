'use strict';

const ObservationTypeCtrl = ($scope, UtilService, ObservationTypeService, ObservationFactory) => {

    // fetch data
    ObservationTypeService.get((res) => {
        $scope.observationTypes = res.data;
    });

    $scope.recordObservationType = (observationType) => {
        ObservationFactory['observationType'] = observationType;
    };

    $scope.cancelObservation = () => {
        UtilService.cancelObservation(ObservationFactory);
    };

};

export default ObservationTypeCtrl;
