/* Resterende bananen */
let myChart = document.getElementById('cola').getContext('2d');

    // Global Options

    let massPopChart = new Chart(myChart, {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Normale Cola', 'Cola Zero', 'Cola Cherry'],
        datasets:[{
          label:'Cola',
          data:[
            300,
            263,
            172
          ],
          //backgroundColor:'green',
          backgroundColor:[
            '#f20019', //FE001A
            '#dadada',
            '#720D34'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
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



