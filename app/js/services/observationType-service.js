export default [
    "BASE_URL",
    "$resource",
    "$http",
    function(BASE_URL, $resource, $http) {
        let obj = $resource(
            BASE_URL + "/observation_types/:id",
            {
                id: "@id"
            },
            {
                query: {
                    method: "GET"
                }
            }
        );

        obj.fetchObservationTypes = cb => {
            $http.get(BASE_URL + "/observation_types").then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };
        return obj;
    }
];
