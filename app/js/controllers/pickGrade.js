const PickGradeCtrl = ($scope, $rootScope, $state, TestData) => {
    $rootScope.data = TestData;
    $scope.pickGrade = (grade) => {
        $rootScope.observation.grade = grade;
        $state.go('pickTeacher');
    };
};

export default PickGradeCtrl;
