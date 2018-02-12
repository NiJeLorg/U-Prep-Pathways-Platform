'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngResource from 'angular-resource';
import ngFileUpload from 'ng-file-upload';


// load controllers
import HomeCtrl from './controllers/home';
import NavCtrl from './controllers/nav';
import SchoolCtrl from './controllers/school';
import ObservationTypeCtrl from './controllers/observation-type';
import ObservationInputsCtrl from './controllers/observation-inputs';
import ObservationFormCtrl from './controllers/observation-form';

// load services
import SchoolService from './services/school-service';
import ObservationTypeService from './services/observationType-service';
import GradeService from './services/grade-service';
import TeacherService from './services/teacher-service';
import SubjectService from './services/subject-service';
import ObservationService from './services/observation-service';
import ClusterService from './services/cluster-service';
import AttachmentService from './services/attachment-service';
import UtilService from './services/utilities-service';
import ObservationFactory from './factories/observation-factory';
import MakeScoreCtrl from './controllers/make-score';

const uprepApp = angular.module('uprepApp', [uiRouter, ngFileUpload, ngResource]);

uprepApp
  .controller('NavCtrl', NavCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('SchoolCtrl', SchoolCtrl)
  .controller('ObservationTypeCtrl', ObservationTypeCtrl)
  .controller('ObservationInputsCtrl', ObservationInputsCtrl)
  .controller('ObservationFormCtrl', ObservationFormCtrl)
  .service('SchoolService', SchoolService)
  .service('ObservationTypeService', ObservationTypeService)
  .service('GradeService', GradeService)
  .service('TeacherService', TeacherService)
  .service('SubjectService', SubjectService)
  .service('ObservationService', ObservationService)
  .service('ClusterService', ClusterService)
  .service('AttachmentService', AttachmentService)
  .service('UtilService', UtilService)
  .factory('ObservationFactory', ObservationFactory)
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
        controller: 'SchoolCtrl',
        templateUrl: 'views/school.html'
      })
      .state('observationType', {
        url: '/observation-type',
        controller: 'ObservationTypeCtrl',
        templateUrl: 'views/observation-type.html'
      })
      .state('observationInputs', {
        url: '/observation-inputs',
        controller: 'ObservationInputsCtrl',
        templateUrl: 'views/observation-inputs.html'
      })
      .state('observationForm', {
        url: '/observation-form/:observationId',
        controller: 'ObservationFormCtrl',
        templateUrl: 'views/observation-form.html',
        resolve: {
          observation: ($stateParams, ObservationService) => {
            return ObservationService.query({
              id: $stateParams.observationId
            }).$promise;
          }
        }
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
