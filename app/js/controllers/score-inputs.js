export default [
    "$scope",
    "$state",
    "UtilService",
    "BreadcrumbFactory",
    "ScoreService",
    "ScoreFactory",
    "workflow",
    function(
        $scope,
        $state,
        UtilService,
        BreadcrumbFactory,
        ScoreService,
        ScoreFactory,
        workflow
    ) {
        $scope.templateUrl = `views/breadcrumbs.html`;


        BreadcrumbFactory["workflow"] = workflow;
        BreadcrumbFactory["label_1"] = ScoreFactory.teacher.school.name;
        BreadcrumbFactory["label_3"] = "Step 3";
        if (workflow === "scores") {
            BreadcrumbFactory["label_2"] = ScoreFactory.teacher.name;
        } else {
            BreadcrumbFactory["label_2"] = "Teachers";
        }
        $scope.breadcrumbs = BreadcrumbFactory;

        // fetch data
        $scope.grades = ScoreFactory.teacher.grades;
        $scope.subjects = ScoreFactory.teacher.subjects;
        $scope.disableSubjectSelect = true;

        $scope.recordGrade = () => {
            ScoreFactory["grade"] = JSON.parse($scope.grade);
            $scope.disableSubjectSelect = false;
        };
        $scope.recordSubject = () => {
            ScoreFactory["subject"] = JSON.parse($scope.subject);
        };

        $scope.cancel = () => {
            UtilService.cancelScore(ScoreFactory);
        };

        $scope.scoreObservation = () => {
            ScoreService.createScore({
                school_id: ScoreFactory.teacher.school.id,
                grade_id: ScoreFactory.grade.id,
                subject_id: ScoreFactory.subject.id,
                teacher_id: ScoreFactory.teacher.id
            }).then(
                res => {
                    $state.go("scoreForm", {
                        scoreId: res.data.data.id
                    });
                },
                err => {
                    console.error(err);
                }
            );
        };
    }
];
