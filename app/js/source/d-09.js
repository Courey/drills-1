(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#color').click(colorize);
  }

  function colorize(){
    var rgba = randomNum();
    $('#color').css('background-color', 'rgba(' + rgba[0] + ',' + rgba[1] + ',' + rgba[2] + ',' + rgba[3] +')');
  }

  function randomNum(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var a = Math.random();
    var colors=[r,g,b,a];
    return colors;
  }
})();
