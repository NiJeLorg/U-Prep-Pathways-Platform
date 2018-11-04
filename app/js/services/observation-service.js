export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/observations/:id",
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

        obj.fetchObservations = () => $http.get("/api/observations");

        obj.createObservation = data => $http.post("/api/observations", data);

        return obj;
    }
];
