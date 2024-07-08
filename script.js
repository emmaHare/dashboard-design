const ctx = document.getElementById('myChart');
  
Chart.defaults.color = 'black';
Chart.defaults.font.size = 12;



new Chart(ctx, {
  
  type: 'bar',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      data: [14, 19, 9, 5, 13, 6, 8],
      borderWidth: 1.4,
      barPercentage: '0.8',
      backgroundColor: 'rgb(64, 165, 224, 0.6)',
      borderColor: 'rgb(64, 165, 224)',
      color: 'black',
      label: 'hello',
      }],
  },
  options: {
    scales: {
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        display: false
        
      },
      x: {
          grid: {
              display: false,
          },
          border: {
              display: false,
          }
      },
    },
    plugins: {
          tooltip: {
            enabled: false,
          },
          legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  }     
});