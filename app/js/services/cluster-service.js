const ClusterService = (BASE_URL, $resource, $http) => {

    let obj = $resource(BASE_URL+'/clusters/', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        }
    });

    return obj;
};

export default ClusterService;
