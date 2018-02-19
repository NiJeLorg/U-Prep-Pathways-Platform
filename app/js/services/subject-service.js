const SubjectService = (BASE_URL, $resource, $http) => {

    let obj = $resource(BASE_URL+ '/schools/:schoolId/grades/:gradeId/teachers', {
        schoolId: '@schoolId',
        gradeId: '@gradeId'
    }, {
        'query': {
            method: 'GET'
        }
    });

    return obj;
};

export default SubjectService;
