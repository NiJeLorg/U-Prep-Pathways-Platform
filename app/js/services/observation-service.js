const ObservationService = (BASE_URL,$resource, $http) => {

    let obj = $resource(BASE_URL+'/observations/:id', {
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
        $http.get(BASE_URL+ '/observations')
            .then((res) => {
                cb(null, res)
            }, (err) => {
                cb(err);
            });
    };

    obj.createObservation = (data, cb) => {
        $http.post(BASE_URL+ '/observations', data)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    return obj;
};

export default ObservationService;
