const ClusterService = ($resource, $http) => {

    let obj = $resource('https://dev-uprep.nijel.org/api/clusters/', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        }
    });

    return obj;
};

export default ClusterService;
