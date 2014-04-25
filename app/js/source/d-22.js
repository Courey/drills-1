/* jshint camelcase: false */
(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(getWeather);
  }

  function getWeather(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/9167d565c84e8588/conditions/q/'+zip+'.json?callback=?';// added ?callback=? on the end.
    $.getJSON(url, weather);
  }

  function weather(conditions){
    var $img = $('<img>');
    $img.attr('src', conditions.current_observation.icon_url);
    $('#weather').append($img);

    var $div = $('<div>');
    $div.text(conditions.current_observation.temperature_string);
    $('#weather').append($div);
    console.log(conditions);
    debugger;
  }

})();
