const AttachmentService = (BASE_URL, $resource, $http) => {

    let obj = $resource(BASE_URL+'/observation_evidences/:id', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        },
    });

    return obj;
};

export default AttachmentService;
