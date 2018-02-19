const ClusterService = ($resource, $http, BaseUrl) => {

    let obj = $resource(BaseUrl + 'clusters/', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        }
    });

    return obj;
};

export default ClusterService;
