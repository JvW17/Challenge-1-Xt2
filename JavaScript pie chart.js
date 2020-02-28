// Deze regels JavaScript zorgen ervoor dat de de piechart gecreëerd en gestyled wordt.
let myChart = document.getElementById('cola').getContext('2d');

// Dit is de data voor de grafiek.
let massPopChart = new Chart(myChart, {
      type:'doughnut',
      data:{
        labels:['Normale Cola', 'Cola Light', 'Cola Cherry'],
        datasets:[{
          label:'Cola',
          data:[
            304,
            263,
            172
          ],

          // Hieronder staan enkele regels die de grafiek styling geven.
          backgroundColor:[
            '#f20019',
            '#dadada',
            '#720D34'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      
      // Deze regels hebben invloed op de styling van de grafiek.
      options:{
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
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
