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

angular.module('star-rating', [])
  .directive('starRating', starRating);

const uprepApp = angular.module('uprepApp', [uiRouter, ngMaterial, ngFileUpload, angulaFire, uiBootstrap, 'star-rating', 'firebase']);

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
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      })
      .state('auth', {
        url: '/auth',
        controller: 'AuthCtrl',
        templateUrl: 'views/auth.html'
      })
      .state('showObservation', {
        url: '/show-observation/:id',
        controller: 'ShowObservationCtrl',
        templateUrl: 'views/show-observation.html'
      }).state('newObservation', {
        url: '/pick-observation',
        controller: 'NewObservationCtrl',
        templateUrl: 'views/pick-school.html'
      }).state('newObservation.grade', {
        url: '/pick-grade',
        templateUrl: 'views/pick-grade.html'
      }).state('newObservation.teacher', {
        url: '/pick-teacher',
        templateUrl: 'views/pick-teacher.html'
      }).state('newObservation.subject', {
        url: '/pick-subject',
        templateUrl: 'views/pick-subject.html'
      }).state('newObservation.observationKind', {
        url: '/pick-observation-kind',
        templateUrl: 'views/pick-observation-kind.html'
      }).state('newObservation.observationForm', {
        url: '/observation-form',
        templateUrl: 'views/observation-form.html'
      }).state('newObservation.clustersObserved', {
        url: '/clusters-observed',
        templateUrl: 'views/clusters-observed.html'
      }).state('newObservation.nextOptions', {
        url: '/next-options',
        templateUrl: 'views/next-options.html'
      }).state('scoreObservation', {
        url: '/score-observation',
        controller: 'ScoreObservationCtrl',
        templateUrl: 'views/pick-school.html'
      }).state('scoreObservation.grade', {
        url: '/pick-grade',
        templateUrl: 'views/pick-grade.html'
      }).state('scoreObservation.teacher', {
        url: '/pick-teacher',
        templateUrl: 'views/pick-teacher.html'
      }).state('scoreObservation.scoreBase', {
        url: '/score-base',
        templateUrl: 'views/score-base.html'
      }).state('scoreObservation.element', {
        url: '/pick-element',
        templateUrl: 'views/pick-element.html'
      }).state('scoreObservation.component', {
        url: '/pick-component',
        templateUrl: 'views/pick-component.html'
      }).state('update-observation', {
        url: '/update-observation',
        templateUrl: 'views/update-observation.html'
      });

    $locationProvider.html5Mode(true);
  }
]);

function starRating() {
  var directive = {
    restrict: 'EA',
    scope: {
      'value': '=value',
      'max': '=max',
      'hover': '=hover',
      'isReadonly': '=isReadonly'
    },
    link: linkFunc,
    template: '<span ng-class="{isReadonly: isReadonly}">' + '<i ng-class="renderObj" ' + 'ng-repeat="renderObj in renderAry" ' + 'ng-click="setValue($index)" ' + 'ng-mouseenter="changeValue($index, changeOnHover )" >' + '</i>' + '</span>',
    replace: true
  };
  return directive;
}

function linkFunc(scope, element, attrs, ctrl) {
  if (scope.max === undefined) scope.max = 5; // default
  function renderValue() {
    scope.renderAry = [];
    for (var i = 0; i < scope.max; i++) {
      if (i < scope.value) {
        scope.renderAry.push({
          'fa fa-star fa-2x': true
        });
      } else {
        scope.renderAry.push({
          'fa fa-star-o fa-2x': true
        });
      }
    }
  }

  scope.setValue = function (index) {
    if (!scope.isReadonly && scope.isReadonly !== undefined) {
      scope.value = index + 1;
    }
  };

  scope.changeValue = function (index) {
    if (scope.hover) {
      scope.setValue(index);
    } else {
      // !scope.changeOnhover && scope.changeOnhover != undefined
    }
  };

  scope.$watch('value', function (newValue, oldValue) {
    if (newValue) {
      renderValue();
    }
  });
  scope.$watch('max', function (newValue, oldValue) {
    if (newValue) {
      renderValue();
    }
  });
}
