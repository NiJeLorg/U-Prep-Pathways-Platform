'use strict';

const NewObservationCtrl = ($scope, $state, TestData, DataService, Upload, $mdDialog) => {

    // initialize an empty observation object
    $scope.observation = {};
    $scope.observations = DataService;
    $scope.data = TestData;
    $scope.form = {};
    const viewTransition = ['school', 'grade', 'teacher', 'observationKind', 'observationForm'];

    $scope.storeObservationProperty = (property, value) => {
        $scope.observation[property] = value;
        let nextViewIndex = viewTransition.indexOf(property) + 1;
        if (property === 'observationKind' && value === 'Lesson') {
            $state.go('newObservation.subject');
        } else if (property === "subject") {
            $state.go('newObservation.observationForm');
        } else {
            $state.go(('newObservation.' + viewTransition[nextViewIndex]));
        }
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

    $scope.publishObservation = () => {
        $scope.observations.$add($scope.observation);
        $state.go('home');
    };

    $scope.clusterModal = (ev, clusterName) => {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.body))
            .clickOutsideToClose(true)
            .title(clusterName)
            .textContent('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
        );
    };

    // $scope.changeTeacher = () => {
    //     $scope.observation.createdAt = new Date().toISOString();
    //     $scope.observations.$add($scope.observation);
    //     // $state.go('pickTeacher');
    // };

    // $scope.changeObservation = () => {
    //     $scope.observation.createdAt = new Date().toISOString();
    //
    //     $state.go('newObservation.observationKind');
    // };

    // $scope.changeSubject = () => {
    //     $scope.observation.createdAt = new Date().toISOString();
    //     $scope.observations.$add($scope.observation);
    //     $state.go('newObservation.subject');
    // }

    // $scope.changeTeacher = () => {
    //     $scope.observation.createdAt = new Date().toISOString();
    //     $scope.observations.$add($scope.observation);
    //     $state.go('newObservation.teacher');
    // }

    // $scope.changeSchool = () => {
    //     $scope.observation.createdAt = new Date().toISOString();
    //     $scope.observations.$add($scope.observation);
    //     $state.go('newObservation.school');
    // };
};

export default NewObservationCtrl;
