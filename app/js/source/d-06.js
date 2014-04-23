(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(grabNumbers);
  }

  function grabNumbers(){
    var num = $('#input').val().split(', ');
    for(var i = num.length - 3; i < num.length; i++){
      $('#result').append('<div>'+num[i]+'</div>');
    }
  }






})();
