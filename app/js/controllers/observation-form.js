'use strict';

const ObservationFormCtrl = ($scope, $state, $stateParams, $timeout, Upload, GradeService, TeacherService, ObservationService, ClusterService, AttachmentService, UtilService, ObservationFactory) => {

    // load passed observation object
    if ($stateParams.obj) {
        $scope.observation = $stateParams.obj;
    }

    let observationToBeDeleted, clusters_ids = [];

    // fetch data
    GradeService.query({
        id: $scope.observation.school.id
    }, (res) => {
        $scope.grades = res.data;
    }, (err) => {
        console.error(err, 'ERROR');
    });

    ClusterService.query((res) => {
        $scope.clusters = res.data;
    }, (err) => {
        console.errror(err, 'ERROR');
    });


    $scope.selectCluster = (value, cluster) => {
        if (value === true) {
            clusters_ids.push(cluster.id);
        } else {
            if (clusters_ids.indexOf(cluster.id) !== -1) {
                clusters_ids.splice(clusters_ids.indexOf(cluster.id), 1);
            }
        }

        console.log(clusters_ids, 'clusterids');
    };

    $scope.uploadFiles = (files, errFiles) => {
        $scope.files = files;
        $scope.errFiles = errFiles;

        angular.forEach(files, (file) => {
            file.upload = Upload.upload({
                url: ('https://dev-uprep.nijel.org/api/observations/' + $scope.observation.id),
                method: 'PUT',
                data: {
                    attachments: file
                }
            });

            file.upload.then((res) => {
                $timeout(() => {
                    $scope.observation.attachments = res.data.data.attachments;
                });
            }, (res) => {
                if (res.status > 0) {
                    $scope.errMessage = res.status + ': ' + res.data;
                }
            });
        });
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
            UtilService.closeModal('edit-observation-modal');
        });
    };

    $scope.submitObservation = () => {
        ObservationService.update({
            id: $scope.observation.id,
            clusters: []
        }, {
            description: $scope.observation.description,
            clusters: clusters_ids
        }, (res) => {
            $state.go('home');
        }, (err) => {
            console.log(err, 'err');
        });
    };

    $scope.removeAttachment = (obj, file) => {

        console.log(file, 'file');

        obj.forEach((elem, index) => {
            if (elem.name === file.name) {
                obj.splice(index, 1);
            }
        });

        AttachmentService.delete({
            id: file.id,
        }, (res) => {
            console.log(res, 'attachment-delete')
        }, (err) => {
            console.error(err, 'ERROR');
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
