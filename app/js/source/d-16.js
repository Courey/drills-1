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

    $.getJSON(url, function(data){

      var div = '<div class= "data"><div class="symbol">'+symbol+'</div><div class="name">'+data.Name+'</div><div class="value">'+data.LastPrice+'</div></div>';

      $('#quote').append(div);

    });

  }

})();
