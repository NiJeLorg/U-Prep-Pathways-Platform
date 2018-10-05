const SubjectService = (BASE_URL, $resource, $http) => {

    let obj = $resource(BASE_URL + '/schools/:schoolId/grades/:gradeId/teachers', {
        schoolId: '@schoolId',
        gradeId: '@gradeId'
    }, {
        'query': {
            method: 'GET'
        }
    });

    obj.fetchSubjects = (cb) => {
        $http
            .get(BASE_URL + '/subjects')
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            })
    }

    obj.createSubject = (cb, newSubject) => {
        $http
            .post(BASE_URL + '/subjects', {subject: newSubject})
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            })
    }

    obj.deleteSubject = (cb, subject) => {
        $http
            .delete(BASE_URL + '/subjects/' + subject.id,)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            })
    }

    obj.updateSubject = (cb, subject) => {
        $http
            .put(BASE_URL + '/subjects/' + subject.id, {name: subject.name})
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            })
    }


    return obj;
};

export default SubjectService;
