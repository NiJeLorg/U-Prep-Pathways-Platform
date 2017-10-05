'use strict';

import uiRouter from '@uirouter/angularjs';
import angular from 'angular';
import ngMaterial from 'angular-material';
import angulaFire from 'angularfire'
// load controllers and services
import HomeCtrl from './controllers/home';
import PickSchoolCtrl from './controllers/pickSchool';
import PickGradeCtrl from './controllers/pickGrade';
import PickTeacherCtrl from './controllers/pickTeacher';
import PickSubjectCtrl from './controllers/pickSubject';
import PickObservationKindCtrl from './controllers/pickObservationKind';
import ObservationFormCtrl from './controllers/observationForm';
import ClustersObservedCtrl from './controllers/clustersObserved';
import DataService from './services/DataService';
import TestData from './services/TestData';


const uprepApp = angular.module('uprepApp', [uiRouter, ngMaterial, "firebase"]);

uprepApp
  .controller('HomeCtrl', HomeCtrl)
  .controller('PickSchoolCtrl', PickSchoolCtrl)
  .controller('PickGradeCtrl', PickGradeCtrl)
  .controller('PickTeacherCtrl', PickTeacherCtrl)
  .controller('PickSubjectCtrl', PickSubjectCtrl)
  .controller('PickObservationKindCtrl', PickObservationKindCtrl)
  .controller('ObservationFormCtrl', ObservationFormCtrl)
  .controller('ClustersObservedCtrl', ClustersObservedCtrl)
  .service('DataService', DataService)
  .service('TestData', TestData);

uprepApp.config(['$stateProvider', '$httpProvider',
  '$urlRouterProvider', '$locationProvider', ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) => {

    // For any unmatched url, redirect to home
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      })
      .state('pickSchool', {
        url: '/pick-school',
        controller: 'PickSchoolCtrl',
        templateUrl: 'views/pick-school.html'
      })
      .state('pickGrade', {
        url: '/pick-grade',
        controller: 'PickGradeCtrl',
        templateUrl: 'views/pick-grade.html'
      })
      .state('pickTeacher', {
        url: '/pick-teacher',
        controller: 'PickTeacherCtrl',
        templateUrl: 'views/pick-teacher.html'
      })
      .state('pickSubject', {
        url: '/pick-subject',
        controller: 'PickSubjectCtrl',
        templateUrl: 'views/pick-subject.html'
      })
      .state('pickObservationKind', {
        url: '/pick-observation-kind',
        controller: 'PickObservationKindCtrl',
        templateUrl: 'views/pick-observation-kind.html'
      })
      .state('observationForm', {
        url: '/observation-form',
        controller: 'ObservationFormCtrl',
        templateUrl: 'views/observation-form.html'
      })
      .state('clustersObserved', {
        url: '/clusters-observed',
        controller: 'ClustersObservedCtrl',
        templateUrl: 'views/clusters-observed.html'
      });



    $locationProvider.html5Mode(true);
  }
]);
