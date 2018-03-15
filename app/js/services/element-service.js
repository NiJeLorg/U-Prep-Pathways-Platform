const ElementService = (BASE_URL, $resource, $http) => {

    let obj = $resource(BASE_URL + '/elements/:id', {
        id: '@id'
    });

    obj.fetchElements = (cb) => {
        $http.get(BASE_URL + '/elements').then((res) => {
            cb(null, res);
        }, (err) => {
            cb(err);
        });
    };

    return obj;
};

export default ElementService;
