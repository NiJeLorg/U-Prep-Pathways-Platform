const PickSchoolCtrl = ($scope, $rootScope, $state, TestData) => {
    $rootScope.data = TestData;
    $scope.pickSchool = (school) => {
        $rootScope.observation.school = school;
        $state.go('pickGrade');
    };
};

export default PickSchoolCtrl;
