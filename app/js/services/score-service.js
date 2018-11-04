export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/scores/:id",
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

        obj.fetchScores = () => $http.get("/api/scores");

        obj.createScore = data => $http.post("/api/scores", data);

        return obj;
    }
];
