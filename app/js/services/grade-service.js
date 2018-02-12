const GradeService = (BASE_URL, $resource, $http) => {

    const obj = $resource(BASE_URL + '/schools/:id/grades', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        }
    });

    return obj;
};

export default GradeService;
