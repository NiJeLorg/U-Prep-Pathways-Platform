export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/schools/:id/grades",
            {
                id: "@id"
            },
            {
                query: {
                    method: "GET"
                }
            }
        );

        obj.fetchGrades = () => $http.get("/api/grades");

        obj.createGrade = newGrade =>
            $http.post("/api/grades", { grade: newGrade });

        obj.deleteGrade = grade => $http.delete("/api/grades/" + grade.id);

        obj.updateGrade = grade =>
            $http.put("/api/grades/" + grade.id, {
                name: grade.name
            });

        return obj;
    }
];
