export default [
    "$scope",
    "TeacherService",
    "SchoolService",
    "GradeService",
    "SubjectService",
    "UtilService",
    function(
        $scope,
        TeacherService,
        SchoolService,
        GradeService,
        SubjectService,
        UtilService
    ) {
        //initialize models
        $scope.resourceType;

        // utility functions
        function deleteItemFromArray(arr, obj) {
            return arr.filter(el => el.id !== obj.id);
        }

        function getResources() {
            // fetch data
            TeacherService.fetchAllTeachers().then(
                res => {
                    $scope.teachers = res.data.data;
                    $scope.teachers.map((el, index) => {
                        var lastName = el.name
                            .split(" ")
                            .slice(-1)
                            .join(" ");
                        el.lastName = lastName;
                    });
                },
                err => {
                    console.error(err, "ERROR");
                }
            );

            SchoolService.fetchSchools().then(
                res => {
                    $scope.schools = res.data.data;
                },
                err => {
                    console.error(err);
                }
            );

            GradeService.fetchGrades().then(
                res => {
                    $scope.grades = res.data.data;
                },
                err => {
                    console.error(err);
                }
            );

            SubjectService.fetchSubjects().then(
                res => {
                    $scope.subjects = res.data.data;
                },
                err => {
                    console.error(err);
                }
            );

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
        }

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
                SchoolService.createSchool(newSchool).then(
                    res => {
                        UtilService.closeModal(
                            `create-${$scope.resourceType}-modal`
                        );
                        $scope.schools.push(res.data.data);
                    },
                    err => {
                        console.error(err, "ERROR");
                    }
                );
            };

            $scope.createGrade = newGrade => {
                GradeService.createGrade(newGrade).then(
                    res => {
                        UtilService.closeModal(
                            `create-${$scope.resourceType}-modal`
                        );
                        $scope.grades.push(res.data.data);
                    },
                    err => {
                        console.error(err, "ERROR");
                    }
                );
            };

            $scope.createSubject = newSubject => {
                SubjectService.createSubject(newSubject).then(
                    res => {
                        UtilService.closeModal(
                            `create-${$scope.resourceType}-modal`
                        );
                        $scope.subjects.push(res.data.data);
                    },
                    err => {
                        console.error(err, "ERROR");
                    }
                );
            };

            $scope.createTeacher = newTeacher => {
                TeacherService.createTeacher(newTeacher).then(
                    res => {
                        UtilService.closeModal(
                            `create-${$scope.resourceType}-modal`
                        );
                        $scope.teachers.push(res.data.data);
                    },
                    err => {
                        console.error(err, "ERROR");
                    }
                );
            };
        }

        function deleteResources() {
            let toBeDeletedResource;

            // delete resources modals
            $scope.openDeleteResourceModal = resource => {
                UtilService.openModal("delete-resource-modal");
                toBeDeletedResource = resource;
            };

            $scope.closeDeleteResourceModal = () => {
                UtilService.closeModal("delete-resource-modal");
            };

            $scope.deleteResource = () => {
                if ($scope.resourceType == "school") {
                    SchoolService.deleteSchool(toBeDeletedResource).then(
                        res => {
                            UtilService.closeModal("delete-resource-modal");
                            $scope.schools = deleteItemFromArray(
                                $scope.schools,
                                toBeDeletedResource
                            );
                        },
                        err => {
                            console.error(err, "ERR");
                        }
                    );
                }
                if ($scope.resourceType == "teacher") {
                    TeacherService.deleteTeacher(toBeDeletedResource).then(
                        res => {
                            UtilService.closeModal("delete-resource-modal");
                            $scope.teachers = deleteItemFromArray(
                                $scope.teachers,
                                toBeDeletedResource
                            );
                        },
                        err => {
                            console.error(err, "ERR");
                        }
                    );
                }
                if ($scope.resourceType == "grade") {
                    GradeService.deleteGrade(toBeDeletedResource).then(
                        res => {
                            UtilService.closeModal("delete-resource-modal");
                            $scope.grades = deleteItemFromArray(
                                $scope.grades,
                                toBeDeletedResource
                            );
                        },
                        err => {
                            console.error(err, "ERR");
                        }
                    );
                }
                if ($scope.resourceType == "subject") {
                    SubjectService.deleteSubject(toBeDeletedResource).then(
                        err => {
                            UtilService.closeModal("delete-resource-modal");
                            $scope.subjects = deleteItemFromArray(
                                $scope.subjects,
                                toBeDeletedResource
                            );
                        },
                        err => {
                            console.error(err, "ERR");
                        }
                    );
                }
            };
        }

        function updateResources() {
            // update resources
            $scope.openEditResoureModal = obj => {
                UtilService.openModal(`update-${$scope.resourceType}-modal`);
                if ($scope.resourceType == "teacher") {
                    console.log(obj, "obj");
                    $scope.updatedTeacher = obj;
                    $scope.updatedTeacher.firstName = $scope.updatedTeacher.name.split(
                        " "
                    )[0];

                    $scope.grades.map(grade => {
                        grade.ticked = false;
                    });

                    $scope.subjects.map(subject => {
                        subject.ticked = false;
                    });

                    $scope.grades.map(grade => {
                        $scope.updatedTeacher.grades.map(el => {
                            if (grade.name === el.name) {
                                grade.ticked = true;
                            }
                        });
                    });

                    $scope.subjects.map(subject => {
                        $scope.updatedTeacher.subjects.map(el => {
                            if (subject.name === el.name) {
                                subject.ticked = true;
                            }
                        });
                    });
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
                SchoolService.updateSchool(school).then(
                    res => {
                        UtilService.closeModal(
                            `update-${$scope.resourceType}-modal`
                        );
                    },
                    err => {
                        console.error(err, "ERR");
                    }
                );
            };

            $scope.updateSubject = subject => {
                SubjectService.updateSubject(subject).then(
                    res => {
                        UtilService.closeModal(
                            `update-${$scope.resourceType}-modal`
                        );
                    },
                    err => {
                        console.error(err, "ERR");
                    }
                );
            };

            $scope.updateGrade = grade => {
                GradeService.updateGrade(grade).then(
                    res => {
                        UtilService.closeModal(
                            `update-${$scope.resourceType}-modal`
                        );
                    },
                    err => {
                        console.error(err, "ERR");
                    }
                );
            };
        }

        getResources();
        createResources();
        deleteResources();
        updateResources();
    }
];
