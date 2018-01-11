'use strict';

import uiRouter from '@uirouter/angularjs';
import angular from 'angular';
import ngFileUpload from 'ng-file-upload';


// load controllers and services
import HomeCtrl from './controllers/home';
import NavCtrl from './controllers/nav';


const uprepApp = angular.module('uprepApp', [uiRouter, ngFileUpload]);

uprepApp
  .controller('NavCtrl', NavCtrl)
  .controller('HomeCtrl', HomeCtrl);

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
        templateUrl: 'views/school.html'
      })
      .state('observationKind', {
        url:'/observation-kind',
        templateUrl: 'views/observation-kind.html'
      })
      .state('observationInputs', {
        url: '/observation-inputs',
        templateUrl: 'views/observation-inputs.html'
      })
      .state('observationForm', {
        url: '/observation-form',
        templateUrl: 'views/observation-form.html'
      });
    $locationProvider.html5Mode(true);
  }
]);
