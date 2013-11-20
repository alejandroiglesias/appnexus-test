'use strict';

angular.module('appnexusTestApp')
  .filter('collapse', function () {
    return function (value, bypass) {
      if (!value) {
        return '';
      }
      // If bypassed, return original value.
      if (bypass === true) {
        return value;
      }
      // Get first line of value.
      var newValue = value.substr(0, value.indexOf('<br>'));
      // If content only has one line, return original value.
      if (newValue.length === value.length || newValue.length === 0) {
        return value;
      }

      return newValue + '…';
    };
  });
