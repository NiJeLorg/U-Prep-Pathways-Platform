const SchoolService = ($resource, $http, BaseUrl) => {

    let obj = $resource(BaseUrl + 'schools/:id', {
        id: '@id'
    });

    obj.fetchSchools = (cb) => {
        $http.get(BaseUrl + 'schools').then((res) => {
            cb(null, res);
        }, (err) => {
            cb(err);
        });
    };

    return obj;
};

export default SchoolService;
