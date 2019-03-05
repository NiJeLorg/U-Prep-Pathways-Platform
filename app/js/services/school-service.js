export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource("/api/schools/:id");

        obj.fetchSchools = () => $http.get("/api/schools");

        obj.createSchool = data => $http.post("/api/schools", data);

        obj.updateSchool = school =>
            $http.put("/api/schools/" + school.id, {
                name: school.name
            });

        return obj;
    }
];
