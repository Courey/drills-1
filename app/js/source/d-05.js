(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(doMath);
  }

  function doMath(){
    var numArray = $('#input').val().split(', ').map(function(value){var result = Math.pow(value, 2); return result;}).filter(function(number){if(number%2!==0){return number;}});
    for(var i = 0; i<numArray.length; i++){
      $('#result').append('<div>'+numArray[i]+'</div>');
    }
  }






})();
