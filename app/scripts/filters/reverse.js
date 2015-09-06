'use strict';

angular.module('tmregfireApp')
  .filter('reverse', function() {
    return function(items) {
      return angular.isArray(items)? items.slice().reverse() : [];
    };
  });
