'use strict';

angular
  .module('demo', ['mwl.calendar', 'ui.bootstrap'])
  .controller('MainCtrl', function ($scope, $modal, moment) {

    //These variables MUST be set as a minimum for the calendar to work
    $scope.calendarView = 'month';
    $scope.calendarDay = new Date();
    $scope.events = [
      {
        title: '收拾东西去上海',
        type: 'warning',
        startsAt: moment().startOf('week').subtract(2, 'days'),
        endsAt: moment().startOf('week').add(1, 'week')
      }, {
        title: '调研angualr',
        type: 'info',
        startsAt: moment().subtract(1, 'day'),
        endsAt: moment().add(6, 'days')
      }, {
        title: '睡觉',
        type: 'important',
        startsAt: moment(),
        endsAt: moment().add(19, 'hours'),
        recursOn: 'year'
      }
    ];

    //
    // var currentYear = moment().year();
    // var currentMonth = moment().month();
    //
    //function random(min, max) {
    //  return Math.floor((Math.random() * max) + min);
    //}
    //
    //for (var i = 0; i < 1000; i++) {
    //  var start = new Date(currentYear,random(0, 11),random(1, 28),random(0, 24),random(0, 59));
    //  $scope.events.push({
    //    title: 'Event ' + i,
    //    type: 'warning',
    //    startsAt: start,
    //    endsAt: moment(start).add(2, 'hours').toDate()
    //  })
    //}

    function showModal(action, event) {
      $modal.open({
        templateUrl: 'modalContent.html',
        controller: function($scope) {
          $scope.action = action;
          $scope.event = event;
        }
      });
    }

    $scope.eventClicked = function(event) {
      showModal('Clicked', event);
    };

    $scope.eventEdited = function(event) {
      showModal('Edited', event);
    };

    $scope.eventDeleted = function(event) {
      showModal('Deleted', event);
    };

    $scope.eventDropped = function(event) {
      showModal('Dropped', event);
    };

    $scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

  });
