'use strict';

angular
  .module('mwl.calendar')
  .controller('MwlEventsListCtrl', function($scope, $sce, moment) {
    $scope.foo = 'bar';
    console.log($scope.calendarMode);

    $scope.shouldDisplay = function(event) {

      var startsAt = moment(event.startsAt);
      var endsAt = moment(event.endsAt);
      var calendarMode = $scope.calendarMode;
      var currentDay = $scope.currentDay;
      var currentStart = moment(currentDay).startOf(calendarMode);
      var currentEnd = moment(currentDay).endOf(calendarMode).endOf('second');

      //假如开始时间小于当前最后一天 且 结束时间大于当前最早一天 且 结束时间大于开始时间，则落在范围中。
      if(endsAt > currentStart && startsAt < currentEnd && endsAt > startsAt) {
        return true;
      }else {
        return false;
      }
    };

  })
  .directive('mwlEventsList', function() {

    return {
      templateUrl: 'src/templates/eventsList.html',
      restrict: 'E',
      scope: {
        currentDay: '=',
        events: '=',
        sortedEvents: '=',
        onEventClick: '=',
        onEditEventClick: '=',
        calendarMode: '='
      },
      controller: 'MwlEventsListCtrl'
    };

  });
