(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#add').click(startTimer);
  }

  function addQuote(){
    $('#symbol').val().toUpperCase().split(',').map($.trim).forEach(addTD);
  }

  function startTimer(){
    //debugger;
    setInterval(function(){clearAndAdd();},3000);
  }

  function clearAndAdd(){
    clearQuotes();
    addQuote();
  }

  function clearQuotes(){
    $('tbody').empty();
  }

  function addTD(str){

      var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+str+'&callback=?';
      $.getJSON(url, function(data){
      $('tbody').append('<tr><td>'+data.Symbol+'</td><td>'+data.LastPrice+'</td></tr>');
      });// end $.getJSON
      //$('tbody').remove();

  }


})();
