const TeacherService = ($resource, $http) => {

    let obj = $resource('https://dev-uprep.nijel.org/api/schools/:schoolId/grades/:gradeId/teachers', {
        schoolId: '@schoolId',
        gradeId: '@gradeId'
    }, {
        'query': {
            method: 'GET'
        }
    });

    obj.fetchTeacher = (teacherId, schoolId, gradeId, cb) => {
        $http.get(('https://dev-uprep.nijel.org/api/teachers/' + teacherId) + '?schoolId=' + schoolId + '&gradeId=' + gradeId)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    return obj;
};

export default TeacherService;
