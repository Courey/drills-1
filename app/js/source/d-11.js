(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    makeBoxes();
    $('body').on('click', '#small', selectSmall);
    $('body').on('click', '#big', selectBig);
    $('body').keydown(move);
  //  $('#small').keydown(move);
  }

  function move(button){
    console.log('move');
    //debugger;
    var location = 0;
    switch(button.keyCode){
    case 37:
      location = parseInt($('.selected').css('left'));
      location = location-10;
      console.log(location);
      $('.selected').css('left', location);
      break;
    case 38:
      location = parseInt($('.selected').css('top'));
      location = location-10;

      $('.selected').css('top', location);
      console.log(location);
      break;
    case 39:
      //debugger;
      location = parseInt($('.selected').css('left'));
      location = location+10;
      console.log(location);
      $('.selected').css('left', location);
      break;
    case 40:
      location = parseInt($('.selected').css('top'));
      location = location+10;
      
      $('.selected').css('top', location);
    }
    if(button.keyCode === 37 || button.keyCode === 38 || button.keyCode === 39 || button.keyCode === 40){
      button.preventDefault();
    }
  }

  function makeBoxes(){
    var box = '<div id="big"><div id="small"></div></div>';
    $('body').append(box);
    placeBoxes();
  }

  function placeBoxes(){
    var h = window.innerHeight;
    var w = window.innerWidth;
    var smH = $('#big').height();
    var smW = $('#big').width();
    var smRH = randomNum(smH)+50;
    var smRW = randomNum(smW)+50;
    var ranH = randomNum(h)+340;
    var ranW = randomNum(w)+340;
    $('#big').css('top', ranH).css('left', ranW);
    $('#small').css('top', smRH).css('left', smRW);
  }

  function randomNum(x){
    return Math.floor(Math.random()*x);
  }

  function selectBig(){
    console.log('select big');
    $('#small').removeClass('selected');
    $(this).addClass('selected');
  }

  function selectSmall(event){
    console.log('select small');
    $('#big').removeClass('selected');
    $(this).addClass('selected');
    event.stopPropagation();
  }

})();
