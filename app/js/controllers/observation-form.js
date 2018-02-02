'use strict';

const ObservationFormCtrl = ($scope, $state, $stateParams, $timeout, Upload, GradeService, TeacherService, ObservationService, UtilService, ObservationFactory) => {

    // load passed observation object
    if ($stateParams.obj) {
        $scope.observation = $stateParams.obj;
    }

    let observationToBeDeleted;


    // fetch data
    GradeService.query({
        id: $scope.observation.school.id
    }, (res) => {
        $scope.grades = res.data;
    });


    $scope.uploadFiles = (files, errFiles) => {
        $scope.files = files;
        $scope.errFiles = errFiles;

        // angular.forEach(files, (file) => {
        //     file.upload = Upload.upload({
        //         url: ('https://dev-uprep.nijel.org/api/observations/' + $scope.observation.id),
        //         method: 'PUT',
        //         data: {
        //             attachments: file
        //         }
        //     });

        //     file.upload.then((res) => {
        //         $timeout(() => {
        //             file.result = res.data;
        //         });
        //     }, (res) => {
        //         if (res.status > 0) {
        //             $scope.errMessage = res.status + ': ' + res.data;
        //         }
        //     });
        // });
    };

    $scope.updateTeachersBasedOnSelectedGrade = () => {
        TeacherService.query({
            schoolId: $scope.observation.school.id,
            gradeId: $scope.observation.grade.id
        }, (res) => {
            $scope.teachers = res.data;
        });
    };

    $scope.updateSubjectsBasedOnSelectedTeacher = () => {
        TeacherService.fetchTeacher($scope.observation.teacher.id, $scope.observation.school.id, $scope.observation.grade.id, (err, res) => {
            if (!err) {
                $scope.subjects = res.data.data.subjects;
            } else {
                console.error(err, 'errr');
            }
        });
    };

    $scope.deleteObservation = () => {
        ObservationService.remove({
            id: $scope.observation.id
        }, (res) => {
            UtilService.closeModal('delete-observation-modal');
            $state.go('home');
        });
    };

    $scope.editObservation = () => {
        ObservationService.update({
            id: $scope.observation.id
        }, {
            grade_id: $scope.observation.grade.id,
            teacher_id: $scope.observation.teacher.id,
            subject_id: $scope.observation.subject.id
        }, (res) => {
            UtilService.closeModal('edit-observation-modal');
        }, (err) => {
            console.error(err, 'ERROR');
            UtilService.closeModal('edit-observation-modal');
        });
    };

    $scope.submitObservation = () => {
        ObservationService.update({
            description: $scope.observation.description
        }, (res) => {
            console.log(res, 'res');
        }, (err) => {
            console.log(err, 'err');
        });
    };

    $scope.removeAttachment = (file) => {
        $scope.files.forEach((elem, index) => {
            if (elem.name === file.name) {
                $scope.files.splice(index, 1);
            }
        });
    };

    $scope.openEditObservationModal = () => {
        UtilService.openModal('edit-observation-modal');
    };

    $scope.closeEditObservationModal = () => {
        UtilService.closeModal('edit-observation-modal');
    };

    $scope.openDeleteModal = () => {
        UtilService.openModal('delete-observation-modal');
    };

    $scope.closeDeleteModal = () => {
        UtilService.closeModal('delete-observation-modal');
    };
};

export default ObservationFormCtrl;
