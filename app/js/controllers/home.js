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
        // fetch data
        function fetchTeachers() {
            TeacherService.fetchAllTeachers().then(
                response => {
                    $scope.teachers = response.data.data;
                },
                err => {
                    console.error(err);
                }
            );
        }
        fetchTeachers();

        function fetchSchools() {
            SchoolService.fetchSchools().then(
                response => {
                    $scope.schools = response.data.data;
                },
                err => {
                    console.error(err);
                }
            );
        }
        fetchSchools();

        function fetchObservationTypes() {
            ObservationTypeService.fetchObservationTypes().then(
                response => {
                    $scope.observationTypes = response.data.data;
                },
                err => {
                    console.error(err);
                }
            );
        }
        fetchObservationTypes();

        function fetchGrades() {
            GradeService.fetchGrades().then(
                response => {
                    $scope.grades = response.data.data;
                },
                err => {
                    console.error(err);
                }
            );
        }

        // event handlders
        $scope.handleSchoolChange = school => {
            if (school) {
                fetchGrades();
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
