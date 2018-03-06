'use strict';

const ScoreFormCtrl = ($scope, $state, $stateParams, $timeout, observation, Upload, GradeService, TeacherService,ObservationTypeService, ObservationService, ClusterService, AttachmentService, UtilService, ScoreFactory, BASE_URL) => {
    $scope.indicators = ['Grading','College-Going Culture', 'High Quality Work','Timeliness and Preparation'];
    $scope.toggleAccordion = true;

};


export default ScoreFormCtrl;
