export default [
    "$scope",
    "$state",
    "TeacherService",
    "SchoolService",
    "GradeService",
    "SubjectService",
    "UtilService",
    function(
        $scope,
        $state,
        TeacherService,
        SchoolService,
        GradeService,
        SubjectService,
        UtilService
    ) {
        //initialize models
        $scope.resourceType;
        let toBeDeletedResource;

        // fetch data
        TeacherService.fetchAllTeachers((err, res) => {
            if (!err) {
                $scope.teachers = res.data.data;
                $scope.teachers.map((el, index) => {
                    var lastName = el.name
                        .split(" ")
                        .slice(-1)
                        .join(" ");
                    el.lastName = lastName;
                });
            } else {
                console.error(err, "ERROR");
            }
        });

        SchoolService.fetchSchools((err, res) => {
            if (!err) {
                $scope.schools = res.data.data;
            } else {
                console.error(err, "ERROR");
            }
        });

        GradeService.fetchGrades((err, res) => {
            if (!err) {
                $scope.grades = res.data.data;
            } else {
                console.error(err, "ERROR");
            }
        });

        SubjectService.fetchSubjects((err, res) => {
            if (!err) {
                $scope.subjects = res.data.data;
            } else {
                console.error(err, "ERROR");
            }
        });

        // event handlders
        $scope.fetchGrades = school => {
            if (school !== null) {
                GradeService.query(
                    {
                        id: school.id
                    },
                    res => {
                        $scope.grades = res.data;
                    },
                    err => {
                        console.error(err, "ERROR");
                    }
                );
            } else {
                $scope.grades = [];
            }
        };

        // crete resource
        function createResources() {
            // event handlers
            $scope.openModal = () => {
                UtilService.openModal(`create-${$scope.resourceType}-modal`);
            };

            $scope.closeModal = () => {
                UtilService.closeModal(`create-${$scope.resourceType}-modal`);
            };

            $scope.createSchool = newSchool => {
                SchoolService.createSchool((err, res) => {
                    if (!err) {
                        UtilService.closeModal(
                            `create-${$scope.resourceType}-modal`
                        );
                        $state.reload();
                    } else {
                        console.error(err, "ERROR");
                    }
                }, newSchool);
            };

            $scope.createGrade = newGrade => {
                GradeService.createGrade((err, res) => {
                    if (!err) {
                        UtilService.closeModal(
                            `create-${$scope.resourceType}-modal`
                        );
                        $state.reload();
                    } else {
                        console.error(err, "ERROR");
                    }
                }, newGrade);
            };

            $scope.createSubject = newSubject => {
                SubjectService.createSubject((err, res) => {
                    if (!err) {
                        UtilService.closeModal(
                            `create-${$scope.resourceType}-modal`
                        );
                        $state.reload();
                    } else {
                        console.error(err, "ERROR");
                    }
                }, newSubject);
            };

            $scope.createTeacher = newTeacher => {
                TeacherService.createTeacher((err, res) => {
                    if (!err) {
                        UtilService.closeModal(
                            `create-${$scope.resourceType}-modal`
                        );
                        $state.reload();
                    } else {
                        console.error(err, "ERROR");
                    }
                }, newTeacher);
            };
        }

        function deleteResources() {
            // delete resources
            $scope.openDeleteResourceModal = resource => {
                UtilService.openModal("delete-resource-modal");
                toBeDeletedResource = resource;
            };

            $scope.closeDeleteResourceModal = () => {
                UtilService.closeModal("delete-resource-modal");
            };

            $scope.deleteResource = resource => {
                if (resource == "school") {
                    SchoolService.deleteSchool((err, res) => {
                        if (!err) {
                            UtilService.closeModal("delete-resource-modal");
                            $state.reload();
                        } else {
                            console.error(err, "ERR");
                        }
                    }, toBeDeletedResource);
                }
                if (resource == "teacher") {
                    TeacherService.deleteTeacher((err, res) => {
                        if (!err) {
                            UtilService.closeModal("delete-resource-modal");
                            $state.reload();
                        } else {
                            console.error(err, "ERR");
                        }
                    }, toBeDeletedResource);
                }
                if (resource == "grade") {
                    GradeService.deleteGrade((err, res) => {
                        if (!err) {
                            UtilService.closeModal("delete-resource-modal");
                            $state.reload();
                        } else {
                            console.error(err, "ERR");
                        }
                    }, toBeDeletedResource);
                }
                if (resource == "subject") {
                    SubjectService.deleteSubject((err, res) => {
                        if (!err) {
                            UtilService.closeModal("delete-resource-modal");
                            $state.reload();
                        } else {
                            console.error(err, "ERR");
                        }
                    }, toBeDeletedResource);
                }
            };
        }

        function updateResources() {
            // update resources
            $scope.openEditResoureModal = obj => {
                UtilService.openModal(`update-${$scope.resourceType}-modal`);
                if ($scope.resourceType == "teacher") {
                    $scope.updatedTeacher = obj;
                }
                if ($scope.resourceType == "school") {
                    $scope.updatedSchool = obj;
                }
                if ($scope.resourceType == "subject") {
                    $scope.updatedSubject = obj;
                }
                if ($scope.resourceType == "grade") {
                    $scope.updatedGrade = obj;
                }
            };

            $scope.closeEditResourceModal = () => {
                UtilService.closeModal(`update-${$scope.resourceType}-modal`);
            };

            $scope.updateSchool = school => {
                SchoolService.updateSchool((err, res) => {
                    if (!err) {
                        UtilService.closeModal(
                            `update-${$scope.resourceType}-modal`
                        );
                        $state.reload();
                    } else {
                        console.error(err, "ERR");
                    }
                }, school);
            };

            $scope.updateSubject = subject => {
                SubjectService.updateSubject((err, res) => {
                    if (!err) {
                        UtilService.closeModal(
                            `update-${$scope.resourceType}-modal`
                        );
                        $state.reload();
                    } else {
                        console.error(err, "ERR");
                    }
                }, subject);
            };

            $scope.updateGrade = grade => {
                GradeService.updateGrade((err, res) => {
                    if (!err) {
                        UtilService.closeModal(
                            `update-${$scope.resourceType}-modal`
                        );
                        $state.reload();
                    } else {
                        console.error(err, "ERR");
                    }
                }, grade);
            };
        }

        createResources();
        deleteResources();
        updateResources();
    }
];
