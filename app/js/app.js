'use strict';

import uiRouter from '@uirouter/angularjs';
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngFileUpload from 'ng-file-upload';
import angulaFire from 'angularfire';
import uiBootstrap from 'angular-ui-bootstrap';

// load controllers and services
import AuthCtrl from './controllers/auth';
import HomeCtrl from './controllers/home';
import NavCtrl from './controllers/nav';
import NewObservationCtrl from './controllers/newObservation';
import ScoreObservationCtrl from './controllers/scoreObservation';
import ShowObservationCtrl from './controllers/showObservation'
import DataService from './services/DataService';
import TestData from './services/TestData';


const uprepApp = angular.module('uprepApp', [uiRouter, ngMaterial, ngFileUpload, angulaFire, uiBootstrap, 'firebase']);

uprepApp
  .controller('AuthCtrl', AuthCtrl)
  .controller('NavCtrl', NavCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('NewObservationCtrl', NewObservationCtrl)
  .controller('ScoreObservationCtrl', ScoreObservationCtrl)
  .controller('ShowObservationCtrl', ShowObservationCtrl)
  .service('DataService', DataService)
  .service('TestData', TestData);

uprepApp.config(['$stateProvider', '$httpProvider',
  '$urlRouterProvider', '$locationProvider', ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) => {

    // For any unmatched url, redirect to home
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      })
      .state('chooseSchool', {
        url: '/school',
        templateUrl: 'views/school.html'
      })
      .state('chooseObservationKind', {
        url:'/observation-kind',
        templateUrl: 'views/observation-kind.html'
      })
      .state('chooseObservationInputs', {
        url: '/observation-inputs',
        templateUrl: 'views/observation-inputs.html'
      });
      // .state('newObservation.grade', {
      //   url: '/pick-grade',
      //   templateUrl: 'views/pick-grade.html'
      // }).state('newObservation.teacher', {
      //   url: '/pick-teacher',
      //   templateUrl: 'views/pick-teacher.html'
      // }).state('newObservation.subject', {
      //   url: '/pick-subject',
      //   templateUrl: 'views/pick-subject.html'
      // }).state('newObservation.observationKind', {
      //   url: '/pick-observation-kind',
      //   templateUrl: 'views/pick-observation-kind.html'
      // }).state('newObservation.observationForm', {
      //   url: '/observation-form',
      //   templateUrl: 'views/observation-form.html'
      // }).state('newObservation.clustersObserved', {
      //   url: '/clusters-observed',
      //   templateUrl: 'views/clusters-observed.html'
      // }).state('newObservation.nextOptions', {
      //   url: '/next-options',
      //   templateUrl: 'views/next-options.html'
      // }).state('scoreObservation', {
      //   url: '/score-observation',
      //   controller: 'ScoreObservationCtrl',
      //   templateUrl: 'views/pick-school.html'
      // }).state('scoreObservation.grade', {
      //   url: '/pick-grade',
      //   templateUrl: 'views/pick-grade.html'
      // }).state('scoreObservation.teacher', {
      //   url: '/pick-teacher',
      //   templateUrl: 'views/pick-teacher.html'
      // }).state('scoreObservation.scoreBase', {
      //   url: '/score-base',
      //   templateUrl: 'views/score-base.html'
      // }).state('scoreObservation.element', {
      //   url: '/pick-element',
      //   templateUrl: 'views/pick-element.html'
      // }).state('scoreObservation.component', {
      //   url: '/pick-component',
      //   templateUrl: 'views/pick-component.html'
      // }).state('scoreObservation.attachEvidence', {
      //   url: '/attach-evidence',
      //   templateUrl: 'views/attach-evidence.html'
      // }).state('scoreObservation.attachEvidenceObservation', {
      //   url: '/attach-evidence-observation',
      //   templateUrl: 'views/attach-evidence-observation.html'
      // }).state('update-observation', {
      //   url: '/update-observation',
      //   templateUrl: 'views/update-observation.html'
      // });

    $locationProvider.html5Mode(true);
  }
]);
