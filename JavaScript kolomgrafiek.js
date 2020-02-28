// Deze regels JavaScript zorgen ervoor dat de de kolomgrafiek gecreëerd en gestyled wordt.
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // Dit is het type grafiek, oftewel 'bar' (kolom).
    type: 'bar',

    // Dit is de data voor de grafiek.
    data:{
        labels:['Onrijp', 'Rijp', 'Overrijp', 'Rot'],
        datasets:[{
          label:'Bananen',
          data:[
            317,
            263,
            172,
            85
          ],

          // Hieronder staan enkele regels die de grafiek styling geven.
          backgroundColor:[
            '#029bdc',
            '#F75A66',
            '#FAB257',
            '#614B55'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },

    // Deze regels hebben invloed op de styling van de grafiek.
    options:{
		maintainAspectRatio: false,  // Deze regel zorgt ervoor dat de grafiek zich 'vrijer' kan bewegen. Hierdoor is deze iets groter en dit past beter in het dashboard.
        legend:{
          display:false
        },
        layout:{
          padding:{
            left:0,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
});
