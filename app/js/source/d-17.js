(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    debugger;
    var shares = $('#shares').val().trim()*1;
    var symbol = $('#symbol').val().trim().toUpperCase();
                                                                        //changed the symbol here to the one I made above.
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';

    $.getJSON(url, function(data){
      var position = shares * data.LastPrice;
      var div = '<div class= "data"><div class="share">'+shares+'</div><div class="value">'+data.LastPrice+'</div><div class="position">'+position+'</div></div>';

      $('#quote').append(div);

    });

  }

})();
