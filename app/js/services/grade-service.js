const GradeService = ($resource, $http) => {

    let obj = $resource('api/grades/:id', {
        id: '@id'
    });

    obj.fetchAllGrades = (cb) => {
        $http.get('api/schools').success(function (res) {
            cb(null, res);
        }).error(function (err) {
            cb(err);
        });
    };

    return obj;
};

export default GradeService;
