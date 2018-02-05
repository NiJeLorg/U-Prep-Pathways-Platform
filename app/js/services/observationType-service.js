const ObservationTypeService = ($resource, $http) => {

    let obj = $resource('https://dev-uprep.nijel.org/api/observation_types');

    return obj;
};

export default ObservationTypeService;
