export default [
    "$scope",
    "$state",
    "TeacherService",
    "SchoolService",
    "ObservationTypeService",
    "GradeService",
    "ObservationFactory",
    "ScoreFactory",
    function(
        $scope,
        $state,
        TeacherService,
        SchoolService,
        ObservationTypeService,
        GradeService,
        ObservationFactory,
        ScoreFactory
    ) {
        $scope.switchCardContext = false;

        // fetch data
        TeacherService.fetchAllTeachers().then(
            res => {
                let reg = /^(\w+)\s(\w+)$/;
                $scope.teachers = res.data.data;
                res.data.data.forEach((elem, index) => {
                    if (
                        elem.school.name === "UPA HS" ||
                        elem.school.name === "UPA MS"
                    ) {
                        elem.name = elem.name.replace(reg, "$2 $1");
                    }
                });
            },
            err => {
                console.error(err);
            }
        );

        SchoolService.fetchSchools().then(
            res => {
                $scope.schools = res.data.data;
            },
            err => {
                console.error(err);
            }
        );

        ObservationTypeService.fetchObservationTypes().then(
            res => {
                $scope.observationTypes = res.data.data;
            },
            err => {
                console.error(err);
            }
        );

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
                        console.error(err);
                    }
                );
            } else {
                $scope.grades = [];
            }
        };

        $scope.newTeacherScore = teacher => {
            ScoreFactory.teacher = teacher;
            $state.go("scoreDetails", { workflow: "scores" });
            localStorage.setItem("scoreParentRoute", "home");
        };

        $scope.newTeacherObservation = teacher => {
            ObservationFactory.teacher = teacher;
            ObservationFactory["observationType"] = $scope.observationTypes[1];
            $state.go("observationInputs", { workflow: "observations" });
            localStorage.setItem("observationParentRoute", "home");
        };
    }
];
