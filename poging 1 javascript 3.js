// d3Gauge and xtend get pulled in via browserify-cdn standalone
// see script tags

var gauges = [];

function createGauge (opts) {
  var node = document.createElement('div');
  node.setAttribute('class', 'gauge-container');
  document.getElementById("drukmeter").appendChild(node);
  var g = d3Gauge(node, opts);
  g.currentValue = g._range / 2;
  gauges.push(g);
}

function getRandomNextValue(gauge) {
  gauge.currentValue += (Math.random() - 0.5) * gauge._range / 20; 			// - 0,5 en /10
  if (gauge.currentValue < gauge._min) gauge.currentValue = gauge._min;
  if (gauge.currentValue > gauge._max) gauge.currentValue = gauge._max;
  return gauge.currentValue;
}

function updateGauges() {
  gauges.forEach(function (gauge) {
    gauge.write(getRandomNextValue(gauge));
  });
}


createGauge({ clazz: 'grayscale', label:  'Druk' });

setInterval(updateGauges, 500);