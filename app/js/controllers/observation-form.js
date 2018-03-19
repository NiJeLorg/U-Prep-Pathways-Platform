'use strict';

const ObservationFormCtrl = ($scope, $state, $stateParams, $timeout, observation, Upload, GradeService, TeacherService, ObservationTypeService, ObservationService, ClusterService, AttachmentService, UtilService, ObservationFactory, BASE_URL) => {


    let observationToBeDeleted, cluster_ids = [];
    $scope.observation = observation.data;
    $scope.editObservationName = false;
    $scope.selectedImageUrl;

    // fetch data
    ObservationTypeService.get({
        id: $scope.observation.observation_type_id
    }, (res) => {
        $scope.observationTypeProperties = res.data.observation_type_properties.map((property) => {
            property.value = $scope.getObservationTypePropertyVal(property.id);
            return property;
        });
    }, (err) => {
        console.error(err, 'ERROR');
    });

    GradeService.query({
        id: $scope.observation.school.id
    }, (res) => {
        $scope.grades = res.data;
    }, (err) => {
        console.error(err, 'ERROR');
    });

    ClusterService.query((res) => {
        $scope.clusters = res.data.map((cluster) => {
            cluster.selected = `${$scope.observation.cluster_ids.includes(cluster.id)}`;
            return cluster;
        });
    }, (err) => {
        console.errror(err, 'ERROR');
    });


    $scope.selectCluster = (value, cluster) => {
        if (value === true) {
            if (!$scope.observation.cluster_ids.includes(cluster.id))
                $scope.observation.cluster_ids.push(cluster.id);
            cluster.selected = "true";
        } else {
            cluster.selected = "false";
            if ($scope.observation.cluster_ids.indexOf(cluster.id) !== -1) {
                $scope.observation.cluster_ids.splice($scope.observation.cluster_ids.indexOf(cluster.id), 1);
            }
        }
    };

    $scope.checkMediaType = (file) => {
        const fileExtension = file.substr(file.indexOf(".") + 1).toLowerCase(),
            imageFormats = ['bmp', 'gif', 'jpeg', 'jpg', 'png'];

        if (imageFormats.some(el => fileExtension.includes(el))) {
            return true;
        } else {
            return false;
        }
    }

    $scope.selectAttachment = (link) => {
        $scope.selectedImageUrl = link;
        angular.element(document.getElementsByClassName('c-light-box-overlay')).css('display', 'block');
        angular.element(document.getElementsByClassName('c-light-box')).css('display', 'flex');
    };

    angular.element(document.getElementsByClassName('c-light-box-overlay')).on('click', function() {
        angular.element(document.getElementsByClassName('c-light-box-overlay')).css('display', 'none');
        angular.element(document.getElementsByClassName('c-light-box')).css('display', 'none');        
        $scope.selectedImageUrl = "";
    });
    

    $scope.uploadFiles = (files, errFiles) => {
        $scope.files = files;
        $scope.errFiles = errFiles;

        angular.forEach(files, (file) => {
            file.upload = Upload.upload({
                url: (BASE_URL + '/observations/' + $scope.observation.id),
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

    $scope.isSelectedCluster = (cluster_id) => {
        return $scope.observation.cluster_ids.includes(cluster_id);
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

    $scope.getPropertyData = () => {
        return $scope.observationTypeProperties.map((property) => {
            return {
                [property.id]: property.value
            };
        });
    };

    $scope.getObservationTypePropertyVal = (id) => {
        const property = $scope.observation.observation_type_property_data.filter((property) => {
            return property[id];
        });
        if (property.length > 0) {
            return property[0][id];
        }
        return '';
    };

    $scope.submitObservation = (status) => {
        ObservationService.update({
            id: $scope.observation.id,
        }, {
            name: $scope.observation.name,
            description: $scope.observation.description,
            cluster_ids: $scope.observation.cluster_ids,
            status: status,
            observation_type_property_data: $scope.getPropertyData()
        }, (res) => {
            UtilService.closeModal('submit-observation-modal');
            UtilService.openModal('submitted-observation-modal');
            $timeout(() => {
                UtilService.closeModal('submitted-observation-modal');
                $state.go('home');
            }, 4000);
        }, (err) => {
            console.log(err, 'err');
        });
    };

    $scope.removeAttachment = (obj, file) => {
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

    $scope.openSubmitObservationModal = () => {
        UtilService.openModal('submit-observation-modal');
    };

    $scope.closeSubmitObservationModal = () => {
        UtilService.closeModal('submit-observation-modal');
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