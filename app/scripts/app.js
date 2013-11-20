'use strict';

angular.module('appnexusTestApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/messages', {
        templateUrl: 'views/message-list.html',
        controller: 'MessageListCtrl'
      })
      .otherwise({
        redirectTo: '/messages'
      });
  });
