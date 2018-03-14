'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngResource from 'angular-resource';
import ngFileUpload from 'ng-file-upload';

// load controllers
import HomeCtrl from './controllers/home';
import ScoreInputCtrl from './controllers/score-inputs';
import NavCtrl from './controllers/nav';
import SchoolCtrl from './controllers/school';
import ObservationTypeCtrl from './controllers/observation-type';
import ObservationInputsCtrl from './controllers/observation-inputs';
import ObservationFormCtrl from './controllers/observation-form';
import ScoreFormCtrl from './controllers/score-form';
import TeacherCtrl from './controllers/teacher';

// load services
import SchoolService from './services/school-service';
import ObservationTypeService from './services/observationType-service';
import GradeService from './services/grade-service';
import TeacherService from './services/teacher-service';
import SubjectService from './services/subject-service';
import ObservationService from './services/observation-service';
import ElementService from './services/element-service';
import ClusterService from './services/cluster-service';
import AttachmentService from './services/attachment-service';
import UtilService from './services/utilities-service';
import ObservationFactory from './factories/observation-factory';
import BreadcrumbFactory from './factories/breadcrumb-factory';
import ScoreFactory from './factories/score-factory';
import MakeScoreCtrl from './controllers/make-score';

const uprepApp = angular.module('uprepApp', [uiRouter, ngFileUpload, ngResource]);


// let url = 'https://dev-uprep.nijel.org/api/';
let url = 'http://localhost:3000/api/';
uprepApp
  .controller('NavCtrl', NavCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('ScoreInputCtrl', ScoreInputCtrl)
  .controller('SchoolCtrl', SchoolCtrl)
  .controller('ObservationTypeCtrl', ObservationTypeCtrl)
  .controller('ObservationInputsCtrl', ObservationInputsCtrl)
  .controller('ObservationFormCtrl', ObservationFormCtrl)
  .controller('ScoreFormCtrl', ScoreFormCtrl)
  .controller('MakeScoreCtrl', MakeScoreCtrl)
  .controller('TeacherCtrl', TeacherCtrl)
  .service('SchoolService', SchoolService)
  .service('ObservationTypeService', ObservationTypeService)
  .service('GradeService', GradeService)
  .service('TeacherService', TeacherService)
  .service('ElementService', ElementService)
  .service('SubjectService', SubjectService)
  .service('ObservationService', ObservationService)
  .service('ClusterService', ClusterService)
  .service('AttachmentService', AttachmentService)
  .service('UtilService', UtilService)
  .factory('ObservationFactory', ObservationFactory)
  .factory('ScoreFactory', ScoreFactory)
  .factory('BreadcrumbFactory', BreadcrumbFactory)
  .constant('BASE_URL', url);

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
        url: '/school?workflow',
        controller: 'SchoolCtrl',
        templateUrl: 'views/school.html',
        resolve: {
          workflow: function ($stateParams) {
            return $stateParams.workflow;

          }
        }
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
        url: '/score',
        controller: 'MakeScoreCtrl',
        templateUrl: 'views/score.html'
      })
      .state('teacher', {
        url: '/teacher',
        controller: 'TeacherCtrl',
        templateUrl: 'views/teacher.html'
      })
      .state('scoreDetails', {
        url: '/score-details',
        controller: 'ScoreInputCtrl',
        templateUrl: 'views/score-details.html'
      })
      .state('score-form', {
        url: '/score-form',
        controller: 'MakeScoreCtrl',
        templateUrl: 'views/score-form.html'
      })
      .state('scoreForm', {
        url: '/score-form',
        controller: 'ScoreFormCtrl',
        templateUrl: 'views/score-form.html'
      });
    $locationProvider.html5Mode(true);
  }
]);