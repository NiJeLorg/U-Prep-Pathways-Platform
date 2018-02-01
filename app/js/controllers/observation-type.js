'use strict';

const ObservationTypeCtrl = ($scope, ObservationTypeService, ObservationFactory) => {

    // fetch data
    ObservationTypeService.get((res) => {
        $scope.observationTypes = res.data;
    });

    $scope.recordObservationType = (observationType) => {
        ObservationFactory['observationType'] = observationType;
    };

};

export default ObservationTypeCtrl;
