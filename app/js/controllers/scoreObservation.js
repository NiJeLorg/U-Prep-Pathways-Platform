const ScoreObservationCtrl = ($scope, $state, $mdDialog, TestData) => {
    $scope.data = TestData;

    $scope.isReadonly = false;
    $scope.changeOnHover = false;
    $scope.maxValue = 4;
    $scope.ratingValue = 0;

    $scope.observation = {};

    $scope.pickSchool = (school) => {
        $scope.observation.school = school;
        $state.go('scoreObservation.grade');
    };

    $scope.pickGrade = (grade) => {
        $scope.observation.grade = grade;
        $state.go('scoreObservation.teacher');
    };

    $scope.pickTeacher = (teacher) => {
        $scope.observation.teacher = teacher;
        $state.go('scoreObservation.scoreBase');
    };

    $scope.pickScoreBase = (score) => {
        $scope.observation.scoreBase = score;
        if (score === 'Score by elements') {
            $state.go('scoreObservation.element');
        }
    };

    $scope.pickElement = (element) => {
        $scope.observation.element = element;
        console.log($scope.observation, 'yoo');
        $state.go('scoreObservation.component');
    };

    $scope.setRatingForIndicator = (indicator, rating)=> {
        console.log(indicator, rating);
    };

    $scope.showLevelInformationForIndicatorDialog = (ev, indicator) => {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.body))
            .clickOutsideToClose(true)
            .title(indicator)
            .textContent('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
        );
        console.log(indicator, 'yoo');
    };
};

export default ScoreObservationCtrl;
