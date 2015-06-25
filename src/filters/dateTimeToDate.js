'use strict';

angular
  .module('mwl.calendar')
  .filter('toDate', function() {

    return function(dateTime) {
      return moment(dateTime).format('ll');
    };

  });
