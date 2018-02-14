const TeacherService = ($resource, $http, BaseUrl) => {

    let obj = $resource(BaseUrl + 'schools/:schoolId/grades/:gradeId/teachers', {
        schoolId: '@schoolId',
        gradeId: '@gradeId'
    }, {
        'query': {
            method: 'GET'
        }
    });

    obj.fetchTeacher = (teacherId, schoolId, gradeId, cb) => {
        $http.get((BaseUrl + 'teachers/' + teacherId) + '?schoolId=' + schoolId + '&gradeId=' + gradeId)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    return obj;
};

export default TeacherService;
