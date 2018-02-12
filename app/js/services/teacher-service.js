const TeacherService = (BASE_URL, $resource, $http) => {

    let obj = $resource(BASE_URL + '/schools/:schoolId/grades/:gradeId/teachers', {
        schoolId: '@schoolId',
        gradeId: '@gradeId'
    }, {
        'query': {
            method: 'GET'
        }
    });

    obj.fetchTeacher = (teacherId, schoolId, gradeId, cb) => {
        $http.get((BASE_URL+ '/teachers/' + teacherId) + '?schoolId=' + schoolId + '&gradeId=' + gradeId)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    return obj;
};

export default TeacherService;
