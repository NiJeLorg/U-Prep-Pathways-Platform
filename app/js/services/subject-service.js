export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource("/api/subjects/:id");

        obj.fetchSubjects = () => $http.get("/api/subjects");

        obj.createSubject = newSubject =>
            $http.post("/api/subjects", { subject: newSubject });

        obj.updateSubject = subject =>
            $http.put(`/api/subjects/${subject.id}`, {
                name: subject.name
            });

        return obj;
    }
];
