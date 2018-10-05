export default [
    "$scope",
    "$state",
    "TeacherService",
    "SchoolService",
    "ObservationTypeService",
    "GradeService",
    "ObservationFactory",
    "ScoreFactory",
    "PaginationFactory",
    function(
        $scope,
        $state,
        TeacherService,
        SchoolService,
        ObservationTypeService,
        GradeService,
        ObservationFactory,
        ScoreFactory,
        PaginationFactory
    ) {
        $scope.page = "dashboard";
        $scope.pager = {};
        $scope.switchCardContext = false;
        let observationTypes;

        // fetch data
        TeacherService.fetchAllTeachers((err, res) => {
            let reg = /^(\w+)\s(\w+)$/;
            if (!err) {
                $scope.teachers = res.data.data;
                res.data.data.forEach((elem, index) => {
                    if (
                        elem.school.name === "UPA HS" ||
                        elem.school.name === "UPA MS"
                    ) {
                        elem.name = elem.name.replace(reg, "$2 $1");
                    }
                });
            } else {
                console.error(err, "ERROR");
            }
        });

        SchoolService.fetchSchools((err, res) => {
            if (!err) {
                $scope.schools = res.data.data;
            } else {
                console.error(err, "ERROR");
            }
        });

        ObservationTypeService.fetchObservationTypes((err, res) => {
            if (!err) {
                observationTypes = res.data.data;
            } else {
                console.error(err, "ERROR");
            }
        });

        // event handlders
        $scope.fetchGrades = school => {
            if (school !== null) {
                GradeService.query(
                    {
                        id: school.id
                    },
                    res => {
                        $scope.grades = res.data;
                    },
                    err => {
                        console.error(err, "ERROR");
                    }
                );
            } else {
                $scope.grades = [];
            }
        };

        $scope.newTeacherScore = teacher => {
            ScoreFactory.teacher = teacher;
            $state.go("scoreDetails", { workflow: "scores" });
        };

        $scope.newTeacherObservation = teacher => {
            ObservationFactory.teacher = teacher;
            ObservationFactory["observationType"] = observationTypes[1];
            $state.go("observationInputs", { workflow: "observations" });
        };
    }
];
