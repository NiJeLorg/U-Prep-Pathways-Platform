'use strict';

const NewObservationCtrl = ($scope, $state, TestData, DataService, Upload) => {

    // initialize an empty observation object
    $scope.observation = {};
    $scope.observations = DataService;
    $scope.data = TestData;
    $scope.form = {};
    const viewTransition = ['school', 'grade', 'teacher', 'subject', 'observationKind'];

    $scope.pickSchool = (school) => {
        $scope.observation.school = school;
        $state.go('newObservation.grade');
    };

    $scope.pickGrade = (grade) => {
        $scope.observation.grade = grade;
        $state.go('newObservation.teacher');
    };

    $scope.pickTeacher = (teacher) => {
        $scope.observation.teacher = teacher;
        $state.go('newObservation.subject');
    };

    $scope.pickSubject = (subject) => {
        $scope.observation.subject = subject;
        $state.go('newObservation.observationKind');
    };

    $scope.pickObservationKind = (kind) => {
        $scope.observation.observationKind = kind;
        $state.go('newObservation.observationForm');
    };

    $scope.goToClustersObservedView = (file) => {
        $scope.observation.form = $scope.form;
        Upload.base64DataUrl(file).then(function (base64Urls) {
            if (file) {
                $scope.observation.photo = base64Urls;
            }
        });
        $state.go('newObservation.clustersObserved');
    };

    $scope.changeTeacher = () => {
        $scope.observation.createdAt = new Date().toISOString();
        $scope.observations.$add($scope.observation);
        // $state.go('pickTeacher');
    };

    $scope.changeObservation = () => {
        $scope.observation.createdAt = new Date().toISOString();
        $scope.observations.$add($scope.observation);
        $state.go('newObservation.observationKind');
    };

    $scope.changeSubject = () => {
        $scope.observation.createdAt = new Date().toISOString();
        $scope.observations.$add($scope.observation);
        $state.go('newObservation.subject');
    }

    $scope.changeTeacher = () => {
        $scope.observation.createdAt = new Date().toISOString();
        $scope.observations.$add($scope.observation);
        $state.go('newObservation.teacher');
    }

    $scope.changeSchool = () => {
        $scope.observation.createdAt = new Date().toISOString();
        $scope.observations.$add($scope.observation);
        $state.go('newObservation.school');
    };
};

export default NewObservationCtrl;
