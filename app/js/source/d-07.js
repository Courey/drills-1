(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(doMath);
  }

  function doMath(){
    //debugger;
    var numbers = $('#input').val().split(', ');
    var shiftIt = [];

    for(var i = 0; i < numbers.length+2; i++){
      var shift = numbers.shift();
      var pop = numbers.pop();
      var sum = (shift * 1) + (pop * 1);
      shiftIt.push(sum);
      //console.log(sum);
      $('#result').append('<div>'+shiftIt[i]+'</div>');
    }
  }




})();
