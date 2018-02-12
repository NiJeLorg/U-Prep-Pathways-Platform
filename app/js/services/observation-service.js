const ObservationService = ($resource, $http) => {

    let obj = $resource('https://dev-uprep.nijel.org/api/observations/:id', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        },
        'update': {
            method: 'PUT'
        }
    });

    obj.fetchObservations = (cb) => {
        $http.get('https://dev-uprep.nijel.org/api/observations')
            .then((res) => {
                cb(null, res)
            }, (err) => {
                cb(err);
            });
    };

    obj.createObservation = (data, cb) => {
        $http.post('https://dev-uprep.nijel.org/api/observations', data)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    return obj;
};

export default ObservationService;
