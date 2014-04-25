(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(getArrQuotes);
  }
  var totalQuote = 0;

  function getArrQuotes(){
    var urlString = $('#symbol').val().toUpperCase().split(',').map($.trim).map(getURL);
    keepJSONaway(urlString);
  }

  function keepJSONaway(arrayStrings){
    arrayStrings.map(doJSON);
  }

  function getURL(str){
    return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+str+'&callback=?';
  }

  function doJSON(str){
    var url = str;
    $.getJSON(url, callJSON);
  }

  function callJSON(data){
    var value = data.LastPrice;
    addStuff(value);
  }

  function addStuff(value){
    totalQuote += value;
    $('#quote').text('$'+totalQuote);
  }

})();
