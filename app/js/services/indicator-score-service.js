export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/indicator_scores/:id",
            {
                id: "@id"
            },
            {
                query: {
                    method: "GET"
                },
                update: {
                    method: "PUT"
                }
            }
        );

        obj.createIndicatorScore = data =>
            $http.post("/api/indicator_scores", data);

        return obj;
    }
];
