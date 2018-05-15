'use strict';
const HomeCtrl = ($scope, $state, TeacherService, SchoolService, ObservationTypeService, GradeService, ObservationFactory, ScoreFactory, PaginationFactory) => {

    $scope.page = 'dashboard';
    $scope.pager = {};
    $scope.switchCardContext = false;

    // fetch data
    TeacherService.fetchAllTeachers((err, res) => {
        let reg = /^(\w+)\s(\w+)$/;
        if (!err) {
            $scope.teachers = res.data.data;
            res
                .data
                .data
                .forEach((elem, index) => {
                    if (elem.school.name === 'UPA HS' || elem.school.name === 'UPA MS') {
                        elem.name = elem
                            .name
                            .replace(reg, "$2 $1")
                    }
                })
        } else {
            console.error(err, 'ERROR');
        }
    });

    SchoolService.fetchSchools((err, res) => {
        if (!err) {
            $scope.schools = res.data.data;
        } else {
            console.error(err, 'ERROR');
        }
    });

    ObservationTypeService.fetchObservationTypes((err, res) => {
        if (!err) {
            $scope.observationTypes = res.data.data;
        } else {
            console.error(err, 'ERROR');
        }
    });

    // event handlders
    $scope.fetchGrades = (school) => {
        if (school !== null) {
            GradeService.query({
                id: school.id
            }, (res) => {
                $scope.grades = res.data;
            }, (err) => {
                console.error(err, 'ERROR');
            });
        } else {
            $scope.grades = [];
        }
    }

    $scope.newTeacherScore = (teacher) => {
        ScoreFactory['teacher'] = {
            id: teacher.id,
            name: teacher.name
        };
        ScoreFactory['school'] = teacher.school;
        ScoreFactory['grades'] = teacher.grades;
        ScoreFactory['subjects'] = teacher.subjects;
        $state.go('scoreDetails', {workflow: 'scores'});
    };

    $scope.newTeacherObservation = (teacher) => {
        ObservationFactory['teacher'] = {
            id: teacher.id,
            name: teacher.name
        };
        ObservationFactory['school'] = teacher.school;
        ObservationFactory['grades'] = teacher.grades;
        ObservationFactory['subjects'] = teacher.subjects;
        ObservationFactory['observationType'] = $scope.observationTypes[1];  
        $state.go('observationInputs', {workflow: 'observations'});
    };

    $scope.loadTeacherView = (teacher) => {
        $state.go('teacherObservation', {teacherId: teacher.id});
    };
};

export default HomeCtrl;