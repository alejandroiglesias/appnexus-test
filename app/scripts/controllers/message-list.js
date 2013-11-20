'use strict';

angular.module('appnexusTestApp')
  .controller('MessageListCtrl', function ($scope, $resource) {
    // Get a Message resource.
    var Message = $resource('/data/messages.json');
    // Get all messages and set the collapsed property.
    $scope.messages = Message.query();
  });
