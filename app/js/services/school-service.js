export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource("/api/schools/:id");

        obj.fetchSchools = () => $http.get("/api/schools");

        obj.createSchool = newSchool =>
            $http.post("/api/schools", { school: newSchool });

        obj.updateSchool = school =>
            $http.put("/api/schools/" + school.id, {
                name: school.name
            });

        return obj;
    }
];
