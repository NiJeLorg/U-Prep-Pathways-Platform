const ObservationService = ($resource, $http) => {

    let obj = $resource('http://localhost:3001/api/observations/:id', {
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
        $http.get('http://localhost:3001/api/observations')
            .then((res) => {
                cb(null, res)
            }, (err) => {
                cb(err);
            });
    };

    obj.createObservation = (data, cb) => {
        $http.post('http://localhost:3001/api/observations', data)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    return obj;
};

export default ObservationService;
