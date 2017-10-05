const PickTeacherCtrl = ($scope, $rootScope, $state, TestData) => {
    $rootScope.data = TestData;
    $scope.pickTeacher = (teacher) => {
        $rootScope.observation.teacher = teacher;
        $state.go('pickSubject');
    };
};

export default PickTeacherCtrl;
