export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/schools/:id",
            {
                id: "@id"
            },
            {
                update: {
                    method: "PUT"
                }
            }
        );

        obj.fetchSchools = () => $http.get("/api/schools");

        obj.createSchool = data => $http.post("/api/schools", data);

        return obj;
    }
];
