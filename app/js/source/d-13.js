(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(doMath);
  }

  function doMath(){
    var inputArray = $('#input').val().split('-').map($.trim);
    var sums = inputArray[0].split('+').map($.trim).map(function(num){return parseInt(num, 10);}).filter(function(odds){if(odds%2){return odds;}});
    var products = inputArray[1].split('*').map($.trim).map(function(num){return parseInt(num, 10);}).filter(function(odds){if(odds%2){return odds;}});
    var prodTotal = multiplyNums(products);
    var sumTotal = addNums(sums);

    $('#result').append('<div class="sum">'+sumTotal+'</div>');
    $('#result').append('<div class="sum">'+prodTotal+'</div>');
  }

  function multiplyNums(array){
    var arrayProd=1;
    for(var i = 0; i < array.length; i++){
      arrayProd*=array[i];
    }
    return arrayProd;
  }

  function addNums(array){
    var arraySum=0;
    for(var i = 0; i< array.length; i++){
      arraySum+= array[i];
    }
    return arraySum;
  }



})();
