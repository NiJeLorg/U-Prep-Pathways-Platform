export default [
    "BASE_URL",
    "$resource",
    "$http",
    function(BASE_URL, $resource, $http) {
        let obj = $resource(
            BASE_URL + "/schools/:schoolId/grades/:gradeId/teachers",
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

        obj.fetchSubjects = cb => {
            $http.get(BASE_URL + "/subjects").then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };

        obj.createSubject = newSubject => {
            return $http.post(BASE_URL + "/subjects", { subject: newSubject });
        };

        obj.deleteSubject = subject => {
            return $http.delete(BASE_URL + "/subjects/" + subject.id);
        };

        obj.updateSubject = subject => {
            return $http.put(BASE_URL + "/subjects/" + subject.id, {
                name: subject.name
            });
        };

        return obj;
    }
];
