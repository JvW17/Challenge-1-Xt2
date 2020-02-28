// Deze regels JavaScript zorgen ervoor dat de de drukmeter gecreëerd en gestyled wordt.
var gauges = [];

// Deze functie zorgt ervoor dat de drukmeter wordt gemaakt en in box4 wordt neergezet.
function createGauge (opts) {
  var node = document.createElement('div');
  node.setAttribute('class', 'gauge-container');
  document.getElementById("drukmeter").appendChild(node);
  var g = d3Gauge(node, opts);
  g.currentValue = g._range / 2;
  gauges.push(g);
}

// De onderstaande twee functie zorgen ervoor dat de drukmeter werkt. Oftewel, deze regels JavaScript zorgen ervoor dat het wijzertje beweegt en steeds een andere waarde aangeeft.
function getRandomNextValue(gauge) {
  gauge.currentValue += (Math.random() - 0.5) * gauge._range / 20;
  if (gauge.currentValue < gauge._min) gauge.currentValue = gauge._min;
  if (gauge.currentValue > gauge._max) gauge.currentValue = gauge._max;
  return gauge.currentValue;
}

// Zie bovenstaand commentaar.
function updateGauges() {
  gauges.forEach(function (gauge) {
    gauge.write(getRandomNextValue(gauge));
  });
}

createGauge({ clazz: 'grayscale', label:  'Druk' });

setInterval(updateGauges, 500);
