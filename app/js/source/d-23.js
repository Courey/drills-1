/*global AmCharts:true*/
/* jshint camelcase: false */

(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    makeGraph();
    $('#button').click(getWeather);
  }

  function getWeather(){
    var zipCode = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/9167d565c84e8588/conditions/q/'+zipCode+'.json?callback=?';// added ?callback=? on the end.
    console.log(url);
    $.getJSON(url, function(conditions){
      weatherConditions(conditions);
    });
  }

  function weatherConditions(conditions){
    var weather = {};
    weather.zipCode = conditions.current_observation.display_location.full;
    console.log(weather.zipCode);
    weather.temperature = conditions.current_observation.temp_f;
    console.log(weather.temperature);
    chart.dataProvider.push(weather);
    chart.validateData();
  }

var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('graph', {
    'type': 'serial',
    'theme': 'chalk',
    'dataProvider': [],//this is where the data goes.
    'valueAxes': [{
        'gridColor':'#FFFFFF',
		'gridAlpha': 0.2,
		'dashLength': 0
    }],
    'gridAboveGraphs': true,
    'startDuration': 1,
    'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillAlphas': 0.8,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'temperature'// y axis
    }],
    'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
    },
    'categoryField': 'zipCode',//x-axis
    'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0
    },
	'exportConfig':{
	  'menuTop': 0,
	  'menuItems': [{
      'icon': '/lib/3/images/export.png',
      'format': 'png'
      }]
	}
});
  }

})();
