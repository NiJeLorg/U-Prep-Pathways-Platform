const AttachmentService = ($resource, $http, BaseUrl) => {

    let obj = $resource(BaseUrl + 'observation_evidences/:id', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        },
    });

    return obj;
};

export default AttachmentService;
