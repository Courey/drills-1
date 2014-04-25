(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#pow').click(doMath);
  }

  function doMath(){
    var splitArray = $('#input').val().split('-');
    var bottom = splitArray[0].split(', ');
    var top = splitArray[1].split(', ');

    for (var i = 0; i < bottom.length; i++){
      var result = Math.pow(bottom[i], top[i]);

      var topDiv = '<div class="top">'+bottom[i]+'<sup>'+top[i]+'</sup></div>';
      var bottomDiv = '<div class="bottom">'+result+'</div>';
      var div = $('#result').append(topDiv).append(bottomDiv);
      $('#result').append(div);
    }
  }
})();
