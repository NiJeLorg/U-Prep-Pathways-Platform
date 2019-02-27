export default [
    "$scope",
    "$state",
    "ObservationService",
    "ObservationFactory",
    "BreadcrumbFactory",
    "workflow",

    function(
        $scope,
        $state,
        ObservationService,
        ObservationFactory,
        BreadcrumbFactory,
        workflow
    ) {
        const observation = Object.assign({}, ObservationFactory);

        $scope.templateUrl = `views/breadcrumbs.html`;
        $scope.isSubjectSelectInputDisabled = true;

        $scope.grades = observation.teacher.grades.map(grade => grade);
        $scope.subjects = observation.teacher.subjects.map(subject => subject);

        function setupBreadCrumb() {
            $scope.breadcrumbs = BreadcrumbFactory.setupBreadCrumb(
                workflow,
                observation
            );
        }
        setupBreadCrumb();

        $scope.recordGrade = grade => {
            if (grade) {
                observation.recordedGrade = JSON.parse(grade);
                $scope.isSubjectSelectInputDisabled = false;
            }
        };

        $scope.recordSubject = subject => {
            if (subject) {
                observation.recordedSubject = JSON.parse(subject);
            }
        };

        $scope.createObservation = () => {
            ObservationService.createObservation({
                school_id: observation.teacher.school.id,
                grade_id: observation.recordedGrade.id,
                subject_id: observation.recordedSubject.id,
                teacher_id: observation.teacher.id,
                observation_type_id: observation.observationType.id
            }).then(
                res => {
                    fetchObservation(res.data.data);
                },
                err => {
                    console.error(err);
                }
            );
        };

        function fetchObservation(observation) {
            ObservationService.get(
                {
                    id: observation.id
                },
                res => {
                    transitionToObservationFormView(observation);
                },
                err => {
                    console.error(err);
                }
            );
        }

        function transitionToObservationFormView(observation) {
            $state.go("observationForm", {
                observationId: observation.id
            });
        }

        function showErrorMessage() {
            $scope.errorMessage =
                "Make sure you select all the necessary fields";
        }
    }
];
