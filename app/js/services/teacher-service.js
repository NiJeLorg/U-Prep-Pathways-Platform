const TeacherService = (BASE_URL, $resource, $http) => {

    let obj = $resource(BASE_URL + '/schools/:schoolId/grades/:gradeId/teachers', {
        schoolId: '@schoolId',
        gradeId: '@gradeId'
    }, {
        'query': {
            method: 'GET'
        }
    });

    obj.fetchAllTeachers = (cb) => {
        $http.get(BASE_URL + '/teachers')
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    }

    obj.fetchSchoolTeachers = (schoolId, cb) => {
        $http.get(BASE_URL + '/teachers?schoolId=' + schoolId)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    obj.fetchTeacher = (teacherId, schoolId, gradeId, cb) => {
        $http.get(BASE_URL + '/teachers/' + teacherId + '?schoolId=' + schoolId + '&gradeId=' + gradeId)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    return obj;
};

export default TeacherService;