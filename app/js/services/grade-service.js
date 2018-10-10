export default [
    "BASE_URL",
    "$resource",
    "$http",
    "$q",
    function(BASE_URL, $resource, $http, $q) {
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

        obj.createGrade = newGrade => {
            return $http.post(BASE_URL + "/grades", { grade: newGrade });
        };

        obj.deleteGrade = (grade) => {
            return $http.delete(BASE_URL + "/grades/" + grade.id);
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
