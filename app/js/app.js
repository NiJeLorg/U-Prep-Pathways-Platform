'use strict';

import uiRouter from '@uirouter/angularjs';
import angular from 'angular';
// load controllers and services
import HomeCtrl from './controllers/home';


const uprepApp = angular.module('uprepApp', [uiRouter]);

uprepApp.controller('HomeCtrl', HomeCtrl);

uprepApp.config(['$stateProvider', '$httpProvider',
  '$urlRouterProvider', '$locationProvider', ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) => {

    // For any unmatched url, redirect to home
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      });

    $locationProvider.html5Mode(true);
  }
]);
