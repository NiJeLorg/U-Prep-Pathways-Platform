const SchoolService = ($resource, $http) => {

    let obj = $resource('api/schools/:id', {
        id: '@id'
    });

    obj.fetchSchools = (cb) => {
        $http.get('https://dev-uprep.nijel.org/api/schools').then((res) => {
            cb(null, res);
        }, (err) => {
            cb(err);
        });
    };

    return obj;
};

export default SchoolService;
