export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/subjects/:id",
            {
                id: "@id"
            },
            {
                update: {
                    method: "PUT"
                }
            }
        );

        obj.fetchSubjects = () => $http.get("/api/subjects");

        obj.createSubject = data => $http.post("/api/subjects", data);

        return obj;
    }
];
