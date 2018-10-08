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

        obj.createSchool = (cb, newSchool) => {
            $http.post(BASE_URL + "/schools", { school: newSchool }).then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };

        obj.deleteSchool = (cb, school) => {
            $http.delete(BASE_URL + "/schools/" + school.id).then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };

        obj.updateSchool = (cb, school) => {
            $http
                .put(BASE_URL + "/schools/" + school.id, { name: school.name })
                .then(
                    res => {
                        cb(null, res);
                    },
                    err => {
                        cb(err);
                    }
                );
        };

        return obj;
    }
];
