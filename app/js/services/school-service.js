const SchoolService = ($resource, $http) => {

    let obj = $resource('api/schools/:id', {
        id: '@id'
    });

    obj.fetchAllSchools = (cb) => {
        $http.get('/schools').success(function (res) {
            cb(null, res);
        }).error(function (err) {
            cb(err);
        });
    };

    return obj;
};

export default SchoolService;
