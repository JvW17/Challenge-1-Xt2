google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(drawGauge);

    var gaugeOptions = {min: 0, max: 39600, yellowFrom: 30000, yellowTo: 36000,
      redFrom: 36000, redTo: 39600, minorTicks: 5};
    var gauge;

    function drawGauge() {
      gaugeData = new google.visualization.DataTable();
      gaugeData.addColumn('number', 'Motoren');
      gaugeData.addRows(2);
      gaugeData.setCell(0, 0, 5200);

      gauge = new google.visualization.Gauge(document.getElementById('chart_in'));
      gauge.draw(gaugeData, gaugeOptions);
    }
	
	setInterval(function() {
			gaugeData.setValue(0, 0, gaugeData.getValue(0, 0) + 450 * Math.floor(1));
          gauge.draw(gaugeData, gaugeOptions);
        }, 2000);


var options = {
          width: 400, 
		  height: 120		  
        };