const ObservationService = ($resource, $http) => {

    let obj = $resource('api/observations');

    return obj;
};

export default ObservationService;
