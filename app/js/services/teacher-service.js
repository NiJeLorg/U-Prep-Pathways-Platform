export default [
    "BASE_URL",
    "$resource",
    "$http",
    function(BASE_URL, $resource, $http) {
        let obj = $resource(
            BASE_URL + "/teachers/:id",
            {
                id: "@id"
            },
            {
                query: {
                    method: "GET"
                }
            }
        );

        obj.fetchAllTeachers = cb => {
            $http.get(BASE_URL + "/teachers").then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };

        obj.fetchSchoolTeachers = (schoolId, cb) => {
            $http.get(BASE_URL + "/teachers?schoolId=" + schoolId).then(
                res => {
                    cb(null, res);
                },
                err => {
                    cb(err);
                }
            );
        };

        obj.fetchTeacher = (teacherId, schoolId, gradeId, cb) => {
            $http
                .get(
                    BASE_URL +
                        "/teachers/" +
                        teacherId +
                        "?schoolId=" +
                        schoolId +
                        "&gradeId=" +
                        gradeId
                )
                .then(
                    res => {
                        cb(null, res);
                    },
                    err => {
                        cb(err);
                    }
                );
        };

        obj.deleteTeacher = teacher => {
            return $http.delete(BASE_URL + "/teachers/" + teacher.id);
        };

        obj.createTeacher = teacher => {
            let gradeIds = teacher.grades.map(el => {
                return el.id.toString();
            });

            let subjectIds = teacher.subjects.map(el => {
                return el.id.toString();
            });

            return $http.post(BASE_URL + "/teachers/", {
                name: teacher.firstName + " " + teacher.lastName,
                schoolId: teacher.school.id,
                grades: gradeIds,
                subjects: subjectIds
            });
        };

        return obj;
    }
];
