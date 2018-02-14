const SubjectService = ($resource, $http, BaseUrl) => {

    let obj = $resource(BaseUrl + 'schools/:schoolId/grades/:gradeId/teachers', {
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
