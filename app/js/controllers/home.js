'use strict';

import moment from 'moment';

const HomeCtrl = ($scope, $rootScope, $state, DataService) => {

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

};

export default HomeCtrl;
