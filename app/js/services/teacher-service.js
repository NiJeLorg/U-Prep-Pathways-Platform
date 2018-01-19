const TeacherService = ($resource, $http) => {

    let obj = $resource('api/teachers/:id', {
        id: '@id'
    });

    obj.fetchAllTeachers = (cb) => {
        $http.get('api/teachers').success(function (res) {
            cb(null, res);
        }).error(function (err) {
            cb(err);
        });
    };

    return obj;
};

export default TeacherService;
