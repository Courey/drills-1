/*global AmCharts:true*/
/* jshint camelcase: false */

(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    makeGraph();
    $('#button').click(add);
  }

  function add(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(quote){
      addQuote(quote);
    });
  }
  function addQuote(quote){
    var stock = {};
    var shareAmt = getShares();
    console.log(shareAmt);
    stock.company = quote.Name;
    stock.total = quote.LastPrice * shareAmt;

    chart.dataProvider.push(stock);
    chart.validateData();
  }

  function getShares(){
    var shares = $('#shares').val().trim()*1;
    return shares;
  }

  var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('graph', {
    'type': 'pie',
  	'theme': 'chalk',
      'titles': [{
          'text': 'portfolio breakdown',
          'size': 16
      }],
      'dataProvider': [],
      'valueField': 'total',
      'titleField': 'company',
      'startEffect': 'elastic',
      'startDuration': 2,
      'labelRadius': 15,
      'innerRadius': '50%',
      'depth3D': 10,
      'balloonText': '[[company]]<br><span style="font-size:14px"><b>$[[total]]</b> ([[percents]]%)</span>',
      'angle': 15,
      'exportConfig':{
        menuItems: [{
        icon: '/lib/3/images/export.png',
        format: 'png'
        }]
    	}
    });
  }

})();
