const AttachmentService = ($resource, $http) => {

    let obj = $resource('https://dev-uprep.nijel.org/api/observation_evidences/:id', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        },
    });

    return obj;
};

export default AttachmentService;
