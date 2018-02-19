'use strict';

const ObservationTypeCtrl = ($scope, UtilService, ObservationTypeService, ObservationFactory) => {

    // fetch data

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

    $scope.cancelObservation = () => {
        UtilService.cancelObservation(ObservationFactory);
    };

};

export default ObservationTypeCtrl;
