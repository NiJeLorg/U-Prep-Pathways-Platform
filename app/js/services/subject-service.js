const SubjectService = ($resource, $http) => {

    let obj = $resource('https://dev-uprep.nijel.org/api/schools/:schoolId/grades/:gradeId/teachers', {
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
