export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/observation_types/:id",
            {
                id: "@id"
            },
            {
                query: {
                    method: "GET"
                }
            }
        );

        obj.fetchObservationTypes = () => $http.get("/api/observation_types");

        return obj;
    }
];
