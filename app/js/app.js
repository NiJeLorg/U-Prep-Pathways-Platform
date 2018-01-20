'use strict';

import uiRouter from '@uirouter/angularjs';
import angular from 'angular';
import ngFileUpload from 'ng-file-upload';


// load controllers and services
import HomeCtrl from './controllers/home';
import NavCtrl from './controllers/nav';
import MakeObservationCtrl from './controllers/make-observation';
import MakeScoreCtrl from './controllers/make-score';

const uprepApp = angular.module('uprepApp', [uiRouter, ngFileUpload]);

uprepApp
  .controller('NavCtrl', NavCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('MakeObservationCtrl', MakeObservationCtrl)
  .controller('MakeScoreCtrl', MakeScoreCtrl);

uprepApp.config(['$stateProvider', '$httpProvider',
  '$urlRouterProvider', '$locationProvider', ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) => {

    // For any unmatched url, redirect to home
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      })
      .state('school', {
        url: '/school',
        controller: 'MakeObservationCtrl',
        templateUrl: 'views/school.html'
      })
      .state('observationKind', {
        url: '/observation-kind',
        controller: 'MakeObservationCtrl',
        templateUrl: 'views/observation-kind.html'
      })
      .state('observationInputs', {
        url: '/observation-inputs',
        controller: 'MakeObservationCtrl',
        templateUrl: 'views/observation-inputs.html'
      })
      .state('observationForm', {
        url: '/observation-form',
        controller: 'MakeObservationCtrl',
        templateUrl: 'views/observation-form.html'
      })
      .state('score', {
        url:'/score',
        controller: 'MakeScoreCtrl',
        templateUrl:'views/score.html'
      })
      .state('teacher', {
        url:'/teacher',
        controller: 'MakeScoreCtrl',
        templateUrl:'views/teacher.html'
      })
      .state('scoreDetails', {
        url:'/score-details',
        controller: 'MakeScoreCtrl',
        templateUrl:'views/score-details.html'
      })
      .state('scoreForm', {
        url:'/score-form',
        controller: 'MakeScoreCtrl',
        templateUrl:'views/score-form.html'
      });
    $locationProvider.html5Mode(true);
  }
]);
