export default [
    "BASE_URL",
    "$resource",
    "$http",
    function(BASE_URL, $resource, $http) {
        let obj = $resource(
            BASE_URL + "/schools/:id/grades",
            {
                id: "@id"
            },
            {
                query: {
                    method: "GET"
                }
            }
        );

        obj.fetchGrades = cb => {
            $http.get(BASE_URL + "/grades").then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };

        obj.createGrade = (cb, newGrade) => {
            $http.post(BASE_URL + "/grades", { grade: newGrade }).then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };

        obj.deleteGrade = (cb, grade) => {
            $http.delete(BASE_URL + "/grades/" + grade.id).then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };

        obj.updateGrade = (cb, grade) => {
            $http
                .put(BASE_URL + "/grades/" + grade.id, { name: grade.name })
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
