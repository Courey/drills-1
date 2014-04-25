(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(getArrQuotes);
  }
  var totalQuote = 0;

  function getArrQuotes(){
    debugger;
    var urlString = $('#symbol').val().toUpperCase().split(',').map($.trim).map(getURL);
    //.map(doJSON);
    //var def = $.Deferred();
    keepJSONaway(urlString);
    addDiv();
    //def.resolve();
  }
  function keepJSONaway(arrayStrings){
    arrayStrings.map(doJSON);
  }
  function addDiv(){
    var div = '<div>'+totalQuote+'</div>';
    $('#quote').append(div);
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
      totalQuote += value;

  }

})();
