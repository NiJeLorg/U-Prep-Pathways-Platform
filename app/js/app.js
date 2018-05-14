'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngResource from 'angular-resource';
import ngFileUpload from 'ng-file-upload';
import _ from 'lodash';

// load controllers
import HomeCtrl from './controllers/home';
import NewObservationCtrl from './controllers/new-observation';
import ScoreInputCtrl from './controllers/score-inputs';
import NavCtrl from './controllers/nav';
import ObservationInputsCtrl from './controllers/observation-inputs';
import ObservationFormCtrl from './controllers/observation-form';
import ScoreFormCtrl from './controllers/score-form';
import TeacherCtrl from './controllers/teacher';
import TeacherObservationCtrl from './controllers/teacher-observation';
import AdminCtrl from './controllers/admin';

// load services
import SchoolService from './services/school-service';
import ObservationTypeService from './services/observationType-service';
import GradeService from './services/grade-service';
import TeacherService from './services/teacher-service';
import SubjectService from './services/subject-service';
import ObservationService from './services/observation-service';
import ScoreService from './services/score-service';
import IndicatorScoreService from './services/indicator-score-service'
import ElementService from './services/element-service';
import ClusterService from './services/cluster-service';
import AttachmentService from './services/attachment-service';
import UtilService from './services/utilities-service';
import ObservationFactory from './factories/observation-factory';
import BreadcrumbFactory from './factories/breadcrumb-factory';
import PaginationFactory from './factories/pagination-factory';
import ScoreFactory from './factories/score-factory';
import MakeScoreCtrl from './controllers/make-score';


const uprepApp = angular.module('uprepApp', [uiRouter, ngFileUpload, ngResource]);


let url = 'https://dev-uprep.nijel.org/api/';
// let url = 'http://localhost:3000/api/';
uprepApp
  .controller('NavCtrl', NavCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('NewObservationCtrl', NewObservationCtrl)
  .controller('ScoreInputCtrl', ScoreInputCtrl)
  .controller('ObservationInputsCtrl', ObservationInputsCtrl)
  .controller('ObservationFormCtrl', ObservationFormCtrl)
  .controller('ScoreFormCtrl', ScoreFormCtrl)
  .controller('MakeScoreCtrl', MakeScoreCtrl)
  .controller('TeacherCtrl', TeacherCtrl)
  .controller('TeacherObservationCtrl', TeacherObservationCtrl)
  .controller('AdminCtrl', AdminCtrl)
  .service('SchoolService', SchoolService)
  .service('ObservationTypeService', ObservationTypeService)
  .service('GradeService', GradeService)
  .service('TeacherService', TeacherService)
  .service('ElementService', ElementService)
  .service('SubjectService', SubjectService)
  .service('ObservationService', ObservationService)
  .service('ScoreService', ScoreService)
  .service('IndicatorScoreService', IndicatorScoreService)
  .service('ClusterService', ClusterService)
  .service('AttachmentService', AttachmentService)
  .service('UtilService', UtilService)
  .factory('ObservationFactory', ObservationFactory)
  .factory('ScoreFactory', ScoreFactory)
  .factory('BreadcrumbFactory', BreadcrumbFactory)
  .factory('PaginationFactory', PaginationFactory)
  .filter('teacherGradeFilter', function () {

    // In the return function, we must pass in a single parameter which will be the data we will work on.
    // We have the ability to support multiple other parameters that can be passed into the filter optionally
    return function (items, grade) {
      let filtered = [];
      if (grade === undefined) {
        return items
      } else {
        angular.forEach(items, function (item) {
          angular.forEach(item.grades, function (teacherGrade) {
            if (teacherGrade.name === grade) {
              filtered.push(item);
            }
          });

        });
      }
      return filtered;
    };

  })
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
      .state('newObservation', {
        url: '/new-observation',
        controller: 'NewObservationCtrl',
        templateUrl: 'views/new-observation.html'
      })
      .state('teacherObservation', {
        url: '/teacher-observation/:teacherId',
        controller: 'TeacherObservationCtrl',
        templateUrl: 'views/teacher-observation.html',
        resolve: {
          teacher: ($stateParams, TeacherService) => {
            return TeacherService.query({
              id: $stateParams.teacherId
            }).$promise
          }
        }
      })
      .state('observationInputs', {
        url: '/observation-inputs?workflow',
        controller: 'ObservationInputsCtrl',
        templateUrl: 'views/observation-inputs.html',
        resolve: {
          workflow: function ($stateParams) {
            return $stateParams.workflow;
          }
        }
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
        url: '/score-details?workflow',
        controller: 'ScoreInputCtrl',
        templateUrl: 'views/score-details.html',
        resolve: {
          workflow: function ($stateParams) {
            return $stateParams.workflow;
          }
        }
      })
      .state('scoreForm', {
        url: '/score-form/:scoreId',
        controller: 'ScoreFormCtrl',
        templateUrl: 'views/score-form.html',
        resolve: {
          score: ($stateParams, ScoreService) => {
            return ScoreService.query({
              id: $stateParams.scoreId
            }).$promise;
          }
        }
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .state('admin.schools', {
        url: '/schools',
        templateUrl: 'views/admin-schools.html',
      })
      .state('admin.subjects', {
        url: '/subjects',
        templateUrl: 'views/admin-subjects.html',
      })
      .state('admin.grades', {
        url: '/grades',
        templateUrl: 'views/admin-grades.html',
      });

    $locationProvider.html5Mode(true);
  }
]);