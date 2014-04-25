(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase();
                                                                        //changed the symbol here to the one I made above.
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
                                                                                //I don't know my callback yet, so I put in a question mark and jquery will put it in for me later.
    console.log(1);
    $.getJSON(url, function(data){
      // this is a jquery thinggy. you pass the url you declared up there, and the second parameter is the function you want to call.
      //console.log(data);
    //  debugger;
      $('#quote').text('$'+data.LastPrice);
      //data.LastPrice
    });

  }
  console.log(3);
})();
