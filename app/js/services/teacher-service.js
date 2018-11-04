export default [
    "$resource",
    "$http",
    function($resource, $http) {
        let obj = $resource(
            "/api/teachers/:id",
            {
                id: "@id"
            },
            {
                query: {
                    method: "GET"
                }
            }
        );

        obj.fetchAllTeachers = () => $http.get("/api/teachers");

        obj.fetchTeacher = obj => {
            return $http.get(
                `/api/teachers/${obj.teacherId}?schoolId=${
                    obj.schoolId
                }&gradeId=${obj.gradeId}`
            );
        };

        obj.createTeacher = teacher => {
            let gradeIds = teacher.grades.map(el => {
                return el.id.toString();
            });

            let subjectIds = teacher.subjects.map(el => {
                return el.id.toString();
            });

            return $http.post("/api/teachers/", {
                name: teacher.firstName + " " + teacher.lastName,
                schoolId: teacher.school.id,
                grades: gradeIds,
                subjects: subjectIds
            });
        };

        return obj;
    }
];
