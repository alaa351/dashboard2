
window.onload = function () {
  var options1 = {
    series: [{
      name: 'مضاد حيوي',
      data: [34, 75, 57, 46, 10, 30, 77, 60, 66]
    }, {
      name: 'مسكنات',
      data: [36, 85, 101, 18, 47, 90, 41, 114, 74]
    }, {
      name: ' فيتامينات',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chart: {
      type: 'bar',
      height: 400
    },
     colors: ['#03045E', '#008FFB', '#638ECB'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };
  var chart = new ApexCharts(document.querySelector("#chart"), options1);
  chart.render();

  var options2 = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
      height: 400
    },
     labels: [' شركة افاميا ', ' شركة تاميكو', ' شركة الفا', ' شركة المتحدة', ' شركة ابن الهيثم'],
     colors: ['#BFD7ED', '#638ECB', '#008FFB', '#84B6F4', '#9DB2DC'], 
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  var chart1 = new ApexCharts(document.querySelector("#chart1"), options2);
  chart1.render();}


  
        var options = {
          series: [{
            name: "Desktops",
            data: [10, 41, 10, 51, 33, 62, 50, 91, 148]
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], 
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        };

        var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
        chart2.render();
      
