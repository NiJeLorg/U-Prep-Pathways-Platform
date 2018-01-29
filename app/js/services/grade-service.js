const GradeService = ($resource, $http) => {

    const obj = $resource('https://dev-uprep.nijel.org/api/schools/:id/grades', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        }
    });

    return obj;
};

export default GradeService;
