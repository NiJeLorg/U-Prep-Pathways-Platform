export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource("/api/grades/:id");

        obj.fetchGrades = () => $http.get("/api/grades");

        obj.createGrade = newGrade =>
            $http.post("/api/grades", { grade: newGrade });

        obj.updateGrade = grade =>
            $http.put("/api/grades/" + grade.id, {
                name: grade.name
            });

        return obj;
    }
];
