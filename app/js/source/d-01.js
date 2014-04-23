(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#equals').click(doMath);
  }

  function doMath(){
    var num1 = $('#input1').val();
    var num2 = $('#input2').val();
    var result = num1*1 + num2 * 1;
    $('#result').append(result);
  }






})();
