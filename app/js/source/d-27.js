 /*global AmCharts:true*/
/* jshint camelcase: false */

(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    makeMap();
    $('#button').click(add);
  }
  function add(){

    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/9167d565c84e8588/conditions/q/'+zip+'.json?callback=?';// added ?callback=? on the end.
    $.getJSON(url, addWeather);
  }

  function addWeather(conditions){
    var weather = {};
    var temp = conditions.current_observation.temp_f;
    var longitude = conditions.current_observation.display_location.longitude;
    var latitude = conditions.current_observation.display_location.latitude;
    weather.svgPath= targetSVG;
    weather.zoomLevel= 5;
    weather.scale= 0.5;
    weather.title= temp;
    weather.latitude = latitude;
    weather.longitude = longitude;
    map.dataProvider.images.push(weather);
    map.validateData();

  }

  var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';
  var map;

  function makeMap(){
    map = AmCharts.makeChart('map', {
    	type: 'map',
        'theme': 'none',
         pathToImages: 'http://www.amcharts.com/lib/3/images/',

    	imagesSettings: {
    		rollOverColor: '#089282',
    		rollOverScale: 3,
    		selectedScale: 3,
    		selectedColor: '#089282',
    color:'#13564e'
    	},

    zoomControl:{buttonFillColor:'#15A892'},

    areasSettings:{unlistedAreasColor:'#15A892'},

    	dataProvider: {
    		map: 'worldLow',
    		images: [{
          svgPath: targetSVG,
        }]
    	}
    });
  }

})();
