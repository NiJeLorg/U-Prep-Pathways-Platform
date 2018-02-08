const ObservationTypeService = ($resource, $http) => {

    let obj = $resource('https://dev-uprep.nijel.org/api/observation_types/:id', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        }
    });

    obj.fetchObservationTypes = (cb) => {
        $http.get('https://dev-uprep.nijel.org/api/observation_types')
            .then((res) => {
                cb(null, res)
            }, (err) => {
                cb(err);
            });
    };
    return obj;

};

export default ObservationTypeService;
