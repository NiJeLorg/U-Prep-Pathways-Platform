'use strict';

const NewObservationCtrl = ($scope, $state, TestData, DataService, Upload, $mdDialog) => {


//     // initialize an empty observation object
//     $scope.observation = {};
    // $scope.data = TestData;
    // console.log(data, 'data');
//     $scope.form = {};

//     $scope.recordObservation = (key, value) => {
//         $scope.observation[key] = value;
//         if (key === 'observationKind') {
//             if (value === 'Crew') {
//                 $state.go('newObservation.observationForm');
//             } else {
//                 $state.go('newObservation.subject');
//             }
//         }
//     };


//     $scope.filterGrades = (grade) => {
//         return $scope.observation.school.split(' ').pop().toLowerCase();
//     };


//     $scope.goToClustersObservedView = (file) => {
//         $scope.observation.form = $scope.form;
//         Upload.base64DataUrl(file).then(function (base64Urls) {
//             if (file) {
//                 $scope.observation.photo = base64Urls;
//             }
//         });
//         $state.go('newObservation.clustersObserved');
//     };

//     $scope.publishObservation = () => {
//         $scope.observation.createdAt = firebase.database.ServerValue.TIMESTAMP;
//         DataService.$add($scope.observation);
//         $state.go('newObservation.nextOptions');
//     };

//     $scope.clusterModal = (ev, clusterName) => {
//         $mdDialog.show(
//             $mdDialog.alert()
//             .parent(angular.element(document.body))
//             .clickOutsideToClose(true)
//             .title(clusterName)
//             .textContent('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
//         );
//     };
};

export default NewObservationCtrl;
