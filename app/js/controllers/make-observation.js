const MakeObservationCtrl = ($scope, TestData) => {

    // fetch data
    $scope.schools = TestData.schools;



    // mainipulate data
    $scope.checkTypeOfSchool = (school) => {
        // console.log(school, 'school');
    };



    $scope.observation = {};
};

export default MakeObservationCtrl;
