export default [
    "$resource",
    "$http",
    function($resource, $http) {
        const returnIds = (prop, obj) => obj[prop].map(el => el.id.toString());

        let obj = $resource("/api/teachers/:id");

        obj.fetchAllTeachers = () => $http.get("/api/teachers");

        obj.fetchTeacher = obj => {
            return $http.get(
                `/api/teachers/${obj.teacherId}?schoolId=${
                    obj.schoolId
                }&gradeId=${obj.gradeId}`
            );
        };

        obj.createTeacher = teacher => {
            let grades = teacher.grades.map(el => {
                return el.name;
            });

            return $http.post("/api/teachers/", {
                name: teacher.firstName + " " + teacher.lastName,
                schoolId: teacher.school.id,
                grades: grades,
                subjects: returnIds("subjects", teacher)
            });
        };

        obj.updateTeacher = teacher => {
            return $http.put(`/api/teachers/${teacher.id}`, {
                name: teacher.name,
                schoolId: teacher.school.id,
                grades: returnIds("grades", teacher),
                subjects: returnIds("subjects", teacher)
            });
        };

        return obj;
    }
];
