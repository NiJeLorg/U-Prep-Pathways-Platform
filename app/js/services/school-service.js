export default [
    "BASE_URL",
    "$resource",
    "$http",
    function(BASE_URL, $resource, $http) {
        let obj = $resource(BASE_URL + "/schools/:id", { id: "@id" });

        obj.fetchSchools = cb => {
            $http.get(BASE_URL + "/schools").then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };

        obj.createSchool = newSchool => {
            return $http.post(BASE_URL + "/schools", { school: newSchool });
        };

        obj.deleteSchool = school => {
            return $http.delete(BASE_URL + "/schools/" + school.id);
        };

        obj.updateSchool = school => {
            return $http.put(BASE_URL + "/schools/" + school.id, {
                name: school.name
            });
        };

        return obj;
    }
];
