const GradeService = ($resource, $http,BaseUrl) => {

    const obj = $resource(BaseUrl + 'schools/:id/grades', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        }
    });

    return obj;
};

export default GradeService;
