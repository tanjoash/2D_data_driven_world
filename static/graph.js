// d3 read csv files
let file2020 = "./assets/2020 GFSI by country.csv";

d3.csv(file2020).then(function(loadedData){
  let data = [];
  let labels = [];

  for (let i=0; i <loadedData.length; i++) {
    let country = loadedData[i].country;
    labels.push(country)
    let score = loadedData[i].score;
    data.push(score)
  }

  var myChart = document.getElementById("myChart").getContext('2d');

  var popChart = new Chart(myChart, {
    data:{
      labels: labels,
      datasets: [{
        type: 'line',
        label: 'GFSI score',
        data: data
      }, {
        type: 'bar',
        label: 'GFSI score but bar graph',
        data: data
      }]
    },
    options:{
      plugins: {
        title: {
          display: true,
          text: 'My First Graph'
        }
      }
    }
  })

  var myChart2 = document.getElementById("myChart2").getContext('2d');

  var popChart2 = new Chart(myChart2, {
    data:{
      labels: ['Singapore', 'Malaysia', 'Indonesia', 'China'],
      datasets: [{
        type: 'line',
        label: 'People',
        data: [1000, 5000, 3000, 4000]
      }]
    },
    options:{
      plugins: {
        title: {
          display: true,
          text: 'My Second Graph'
        }
      }
    }
  })

})
