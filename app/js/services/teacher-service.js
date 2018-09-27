const TeacherService = (BASE_URL, $resource, $http) => {

    let obj = $resource(BASE_URL + '/teachers/:id', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        }
    });

    obj.fetchAllTeachers = (cb) => {
        $http
            .get(BASE_URL + '/teachers')
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    }

    obj.fetchSchoolTeachers = (schoolId, cb) => {
        $http
            .get(BASE_URL + '/teachers?schoolId=' + schoolId)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    obj.fetchTeacher = (teacherId, schoolId, gradeId, cb) => {
        $http
            .get(BASE_URL + '/teachers/' + teacherId + '?schoolId=' + schoolId + '&gradeId=' + gradeId)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    obj.deleteTeacher = (cb, teacher) => {
        $http
            .delete(BASE_URL + '/teachers/' + teacher.id,)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    }

    obj.createTeacher = (cb, teacher) => {

        let gradeIds = teacher
            .grades
            .map((el) => {
                return el
                    .id
                    .toString();
            });

        let subjectIds = teacher
            .subjects
            .map((el) => {
                return el
                    .id
                    .toString();
            });

        $http
            .post(BASE_URL + '/teachers/', {
            name: teacher.firstName + ' ' + teacher.lastName,
            schoolId: teacher.school.id,
            grades: gradeIds,
            subjects: subjectIds
        }).then((res) => {
            cb(null, res)
        }, (err) => {
            cb(err);
        });
        
    }

    return obj;
};

export default TeacherService;