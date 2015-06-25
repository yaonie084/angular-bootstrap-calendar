'use strict';

angular
  .module('mwl.calendar')
  .provider('calendarConfig', function() {

    var defaultFormats = {
      angular: {
        date: {
          hour: 'ha',
          day: 'd MMM',
          month: 'MMMM',
          weekDay: 'EEEE',
          time: 'HH:mm',
          datetime: 'MMM d, h:mm a'
        },
        title: {
          day: 'yyyy年MM月dd日, 星期EE',
          week: '{year}年 第{week}周',
          month: 'yyyy年MM月',
          year: 'yyyy年'
        }
      },
      moment: {
        date: {
          hour: 'ha',
          day: 'MMM D日',
          month: 'MMMM',
          weekDay: 'dddd',
          time: 'HH:mm',
          datetime: 'MMM D, h:mm a'
        },
        title: {
          day: 'YYYY年MM月DD日, 星期E',
          week: '{year}年 第{week}周',
          month: 'YYYY年MM月',
          year: 'YYYY年'
        }
      }
    };

    var dateFormatter = 'moment';
    var defaultDateFormats = angular.copy(defaultFormats[dateFormatter].date);
    var defaultTitleFormats = angular.copy(defaultFormats[dateFormatter].title);
    var showTimesOnWeekView = false;

    var i18nStrings = {
      eventsLabel: 'Events',
      timeLabel: 'Time'
    };

    var displayAllMonthEvents = false;

    var configProvider = this;

    configProvider.setDateFormats = function(formats) {
      angular.extend(defaultDateFormats, formats);
      return configProvider;
    };

    configProvider.setTitleFormats = function(formats) {
      angular.extend(defaultTitleFormats, formats);
      return configProvider;
    };

    configProvider.setI18nStrings = function(strings) {
      angular.extend(i18nStrings, strings);
      return configProvider;
    };

    configProvider.setDisplayAllMonthEvents = function(value) {
      displayAllMonthEvents = value;
      return configProvider;
    };

    configProvider.setDateFormatter = function(value) {
      if (['angular', 'moment'].indexOf(value) === -1) {
        throw new Error('Invalid date formatter. Allowed types are angular and moment.');
      }
      dateFormatter = value;
      defaultDateFormats = angular.copy(defaultFormats[dateFormatter].date);
      defaultTitleFormats = angular.copy(defaultFormats[dateFormatter].title);
      return configProvider;
    };

    configProvider.showTimesOnWeekView = function(value) {
      showTimesOnWeekView = value; //experimental, and ignores the event end date
      return configProvider;
    };

    configProvider.$get = function() {
      return {
        dateFormats: defaultDateFormats,
        titleFormats: defaultTitleFormats,
        i18nStrings: i18nStrings,
        displayAllMonthEvents: displayAllMonthEvents,
        dateFormatter: dateFormatter,
        showTimesOnWeekView: showTimesOnWeekView
      };
    };

  });
