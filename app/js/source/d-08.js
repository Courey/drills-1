(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#toggle').click(toggleColor);
  }

  function toggleColor(){
    return ($('#toggle').hasClass('red')) ? $('#toggle').toggleClass('red') : $('#toggle').addClass('red');
  }
})();
