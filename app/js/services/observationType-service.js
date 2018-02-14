const ObservationTypeService = ($resource, $http, BaseUrl) => {

    let obj = $resource(BaseUrl + 'observation_types');

    return obj;
};

export default ObservationTypeService;
