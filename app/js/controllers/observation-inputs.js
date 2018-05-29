'use strict';

const ObservationInputsCtrl = ($scope, $state, GradeService, $rootScope, UtilService, TeacherService, ObservationService, ObservationFactory, BreadcrumbFactory, workflow) => {

    $scope.templateUrl = `views/breadcrumbs/breadcrumbs.html`;
    BreadcrumbFactory['workflow'] = workflow;
    BreadcrumbFactory['label_1'] = ObservationFactory.teacher.school.name;
    BreadcrumbFactory['label_3'] = 'Details';
    if (workflow === 'observations') {
        BreadcrumbFactory['label_2'] = ObservationFactory.observationType.name;
    } else {
        BreadcrumbFactory['label_2'] = 'Teachers';
    }
    $scope.breadcrumbs = BreadcrumbFactory;

    $scope.grades = ObservationFactory.teacher.grades;
    $scope.subjects = ObservationFactory.teacher.subjects;

    // disable teacher and subject select elements on load
    $scope.disableTeacherSelect = true;
    $scope.disableSubjectSelect = true;


    $scope.recordGrade = () => {
        if ($scope.grade) {
            ObservationFactory['grade'] = JSON.parse($scope.grade);
            // disable subject select
            $scope.disableSubjectSelect = false;
        }

    };

    $scope.recordSubject = () => {
        ObservationFactory['subject'] = JSON.parse($scope.subject);
    };


    $scope.createObservation = () => {
        if (ObservationFactory.grade && ObservationFactory.teacher && ObservationFactory.subject) {
            ObservationService.createObservation({
                school_id: ObservationFactory.teacher.school.id,
                grade_id: ObservationFactory.grade.id,
                subject_id: ObservationFactory.subject.id,
                teacher_id: ObservationFactory.teacher.id,
                observation_type_id: ObservationFactory.observationType.id
            }, (err, res) => {
                if (!err) {
                    ObservationService.query({
                        id: res.data.data.id
                    }, (res) => {
                        $state.go('observationForm', {
                            observationId: res.data.id
                        });
                    });
                }
            });
        } else {
            $scope.errorMessage = 'Make sure you select all the necessary fields'
        }
    };

    $scope.cancel = () => {
        UtilService.cancelObservation(ObservationFactory);
    };


};

export default ObservationInputsCtrl;