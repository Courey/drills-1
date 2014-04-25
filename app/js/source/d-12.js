(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(doMath);
  }

  function doMath(){
    $('#input').val().split(', ').map($.trim).map(function(num){return parseInt(num, 10);}).map(function(num, index){var number =(index%2)?Math.pow(num, 3): Math.pow(num, 2); return number;}).forEach(appendDiv);
  }
  function appendDiv(element){
    if(element%2){
      $('#result').append('<div class="odd">'+ element +'</div>');
    }else{
      $('#result').append('<div class="even">'+ element +'</div>');
    }
  }
})();
