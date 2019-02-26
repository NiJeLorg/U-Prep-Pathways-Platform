export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource("/api/grades/:id", {
            id: "@id"
        });

        obj.fetchGrades = () => $http.get("/api/grades");

        return obj;
    }
];
