(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#start').click(timer);
    $('#stop').click(stop);
  }

var beginTimer;

  function timer(){
    beginTimer = setInterval(function(){
      var timerTime = getTime()*1;
      var updateTimer = timerTime+1;
      $('#display').text('');
      $('#display').text(updateTimer);
    }, 1000);
  }

  function stop(){
    clearInterval(beginTimer);
  }

  function getTime(){
    var timeValue = $('#display').text();
    return timeValue;
  }



})();
