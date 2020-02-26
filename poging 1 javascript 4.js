var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
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
          //backgroundColor:'green',
          backgroundColor:[
            '#029bdc',	//97D494	7ADE65
            '#F75A66',	//FBC587	F62A3A
			'#FAB257',	//F75A66	FAB257
            '#7ADE65'	//614B55	E99C00
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },

    // Configuration options go here
    options:{
		maintainAspectRatio: false,
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