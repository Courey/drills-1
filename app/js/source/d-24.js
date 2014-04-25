/*global AmCharts:true*/
/* jshint camelcase: false */

(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    makeGraph();
    $('#button').click(getWind);
  }

  function getWind(){
    var zipCode = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/9167d565c84e8588/conditions/q/'+zipCode+'.json?callback=?';// added ?callback=? on the end.
    console.log(url);
    $.getJSON(url, function(conditions){
      weatherConditions(conditions);
    });
  }

  function weatherConditions(conditions){
    debugger;
    var wind = conditions.current_observation.wind_mph;
    chart.arrows[0].setValue(wind);
    chart.axes[0].setBottomText(wind + ' mph');
  }

//   setInterval(randomValue, 2000);
//
//  // set random value
// function randomValue() {
//     var value = Math.round(Math.random() * 200);
//     gaugeChart.arrows[0].setValue(value);
//     gaugeChart.axes[0].setBottomText(value + " km/h");
// }


var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('graph', {
      'type': 'gauge',
    'theme': 'dark',
      'axes': [{
          'axisThickness':1,
           'axisAlpha':0.2,
           'tickAlpha':0.2,
           'valueInterval':10,
          'bands': [{
              'color': '#84b761',
              'endValue': 30,
              'startValue': 0
          }, {
              'color': '#fdd400',
              'endValue': 80,
              'startValue': 30
          }, {
              'color': '#cc4748',
              'endValue': 100,
              'innerRadius': '95%',
              'startValue': 80
          }],
          'bottomText': '0 km/h',
          'bottomTextYOffset': -20,
          'endValue': 100
          }],
          'arrows': [{}]
      });
    }

})();
