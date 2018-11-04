export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/schools/:schoolId/grades/:gradeId/teachers",
            {
                schoolId: "@schoolId",
                gradeId: "@gradeId"
            },
            {
                query: {
                    method: "GET"
                }
            }
        );

        obj.fetchSubjects = () => $http.get("/api/subjects");

        obj.createSubject = newSubject =>
            $http.post("/api/subjects", { subject: newSubject });

        obj.deleteSubject = subject =>
            $http.delete("/api/subjects/" + subject.id);

        obj.updateSubject = subject =>
            $http.put("/api/subjects/" + subject.id, {
                name: subject.name
            });

        return obj;
    }
];
