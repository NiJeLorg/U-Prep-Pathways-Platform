const SchoolService = (BASE_URL, $resource, $http) => {

    let obj = $resource(BASE_URL + '/schools/:id', {
        id: '@id'
    });

    obj.fetchSchools = (cb) => {
        $http.get(BASE_URL + '/schools').then((res) => {
            cb(null, res);
        }, (err) => {
            cb(err);
        });
    };

    return obj;
};

export default SchoolService;
