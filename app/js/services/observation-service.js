const ObservationService = ($resource, $http, BaseUrl) => {

    let obj = $resource(BaseUrl + 'observations/:id', {
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
        $http.get(BaseUrl + 'observations')
            .then((res) => {
                cb(null, res)
            }, (err) => {
                cb(err);
            });
    };

    obj.createObservation = (data, cb) => {
        $http.post(BaseUrl + 'observations', data)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    return obj;
};

export default ObservationService;
