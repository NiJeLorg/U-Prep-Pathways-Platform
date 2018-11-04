export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource("/api/schools/:id", { id: "@id" });

        obj.fetchSchools = () => $http.get("/api/schools");

        obj.createSchool = newSchool =>
            $http.post("/api/schools", { school: newSchool });

        obj.deleteSchool = school => $http.delete("/api/schools/" + school.id);

        obj.updateSchool = school =>
            $http.put("/api/schools/" + school.id, {
                name: school.name
            });

        return obj;
    }
];
