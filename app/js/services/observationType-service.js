const ObservationTypeService = ($resource, $http) => {

    let obj = $resource('api/observation_types');

    return obj;
};

export default ObservationTypeService;
