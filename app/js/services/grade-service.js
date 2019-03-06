export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/grades/:id",
            {
                id: "@id"
            },
            {
                update: {
                    method: "PUT"
                }
            }
        );

        obj.fetchGrades = () => $http.get("/api/grades");

        obj.createGrade = data => $http.post("/api/grades", data);

        return obj;
    }
];
