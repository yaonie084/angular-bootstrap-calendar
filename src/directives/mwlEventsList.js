'use strict';

angular
  .module('mwl.calendar')
  .controller('MwlEventsListCtrl', function($scope, moment) {
    $scope.foo = 'bar';

  })
  .directive('mwlEventsList', function() {

    return {
      templateUrl: 'src/templates/eventsList.html',
      restrict: 'E',
      scope: {
        currentDay: '=',
        events: '='
      },
      controller: 'MwlEventsListCtrl'
    };

  });
