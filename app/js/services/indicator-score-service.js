const IndicatorScoreService = (BASE_URL,$resource, $http) => {
    let obj = $resource(BASE_URL + '/indicator_scores/:id', {
        id: '@id'
    }, {
        'query': {
            method: 'GET'
        },
        'update': {
            method: 'PUT'
        }
    });

    // obj.fetchScores = (cb) => {
    //     $http.get(BASE_URL + '/scores')
    //         .then((res) => {
    //             cb(null, res)
    //         }, (err) => {
    //             cb(err);
    //         });
    // };

    obj.createIndicatorScore = (data, cb) => {
        $http.post(BASE_URL + '/indicator_scores', data)
            .then((res) => {
                cb(null, res);
            }, (err) => {
                cb(err);
            });
    };

    return obj;
}


export default IndicatorScoreService;