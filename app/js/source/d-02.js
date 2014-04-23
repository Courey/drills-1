(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#button').click(sortThis);
  }

  function sortThis(){
    var stringVal = $('#input').val().split(' ');
    for(var i = 0; i< stringVal.length; i++){
      if(stringVal[i].length%2===0){
        var evenresult = stringVal[i].toLowerCase();
        var evendiv = '<div class="even">'+evenresult+'</div>';
        $('#results').append(evendiv);
      }else{
        var result = stringVal[i].toUpperCase();
        var div = '<div class="odd">'+result+'</div>';
        $('#results').append(div);
      }
    }
  }
})();
