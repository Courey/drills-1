// /*global AmCharts:true*/
 /* jshint camelcase: false */

(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(forecast);
  }

  function forecast(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/9167d565c84e8588/forecast10day/q/'+zip+'.json?callback=?';
    $.getJSON(url, weather);
  }

  function weather(forecast10day){
    var forecastData = forecast10day.forecast.txt_forecast.forecastday;
    for(var i=0; i< 20; i+=2){
      var day = forecastData[i].title;
      var icon = forecastData[i].icon_url;
      makeDiv(day, icon);
    }
  }
  function makeDiv(text, image){
    var $div = $('<div>');
    $div.text(text);
    var $img = $('<img>');
    $img.attr('src', image);
    $('#graph').append($div).append($img);
  }


  // function makeDiv(){
  //   var $img = $('<img>');
  //   $img.attr('src', )
  // }
})();
