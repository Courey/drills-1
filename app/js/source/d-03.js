(function(){
  'use strict';
  $(document).ready(init);
  function init(){
    $('#button').click(fourth);
  }

  function fourth(){
    var numbers = $('#input').val().split(', ');
    for(var i = 0; i< numbers.length; i++){
      var result = doMath(numbers[i]);
      var div = '<div>' + result + '</div>';
      $('#result').append(div);
    }
  }
  function doMath(num){
    return num*num*num*num;
  }
})();
