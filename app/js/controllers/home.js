'use strict';

import moment from 'moment';

const HomeCtrl = ($scope, $rootScope, $state) => {

    $scope.page = 'observed';

    $scope.observations = [{
        observationKind: 'Lesson',
        readableDate: '11/13/2017',
        grade: 'Kindergarten',
        school: 'UPSM ELEMENTARY',
        teacher: 'Mr.Martin'
    }, {
        observationKind: 'Crew',
        readableDate: '11/13/2017',
        school: 'ELLEN THOMPSON ELEMENTARY',
        teacher: 'Ms.Andrews'
    }, {
        observationKind: 'Lesson',
        readableDate: '11/13/2017',
        school: 'UPSM ELEMENTARY',
        subject: 'English',
        teacher: 'Ms.Andrews'
    }, {
        grade: '1st grade',
        observationKind: 'Lesson',
        readableDate: '11/13/2017',
        school: 'ELLEN THOMPSON ELEMENTARY',
        subject: 'Science',
        teacher: 'Ms.Andrews'
    }];

    $scope.scores = [{
        scoreKind: 'Teacher',
        readableDate: '11/13/2017',
        scoreName: 'Mr.Martin',
        scoreTime: '1st Score'
    }, {
        scoreKind: 'Teacher',
        readableDate: '11/13/2017',
        scoreName: 'Ms.Andrews',
        scoreTime: '3rd Score'
    }, {
        scoreKind: 'Schoolwide',
        readableDate: '11/13/2017',
        scoreName: 'Ellen Thompson Elementary',
        scoreTime:'1st Score'
    }];
};

export default HomeCtrl;
