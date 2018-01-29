'use strict';

const ObservationTypeCtrl = ($scope, $state, ObservationTypeService, ObservationFactory) => {

    // fetch data
    ObservationTypeService.get((res) => {
        $scope.observationTypes = res.data;
    });

    $scope.recordObservationType = (observationType) => {
        ObservationFactory['observationType'] = observationType;
        $state.go('observationInputs');
    };

};

export default ObservationTypeCtrl;
