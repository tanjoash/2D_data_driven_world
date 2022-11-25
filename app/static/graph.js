// d3 read csv files
let filemodel1 = "/static/assets/dfallyears_clean_1.csv"
let filemodel2 = "/static/assets/dfallyears_clean_2.csv"
let filemodel3 = "/static/assets/dfallyears_clean_3.csv"

// code to show graph for model 1
d3.csv(filemodel1).then(function(loadedData){
  let agri_land_data = [];
  let basic_water_data = [];
  let co2 = [];
  let eating_disorder = [];
  let employed = [];
  let GDP = [];
  let y_ratio = []

  for (let i=0; i <loadedData.length; i++) {
    let agri_land = loadedData[i]["Agri_land_cap"];
    agri_land_data.push(agri_land)

    let basic_water = loadedData[i]["Basic_water"];
    basic_water_data.push(basic_water)

    let co2_val = loadedData[i]["CO2_agri"];
    co2.push(co2_val)

    let disorder_val = loadedData[i]["Eating_disorder"];
    eating_disorder.push(disorder_val)

    let employ_val = loadedData[i]["Employed_%"];
    employed.push(employ_val)

    let GDP_val = loadedData[i]["GDP"];
    GDP.push(GDP_val)

    let y_val = loadedData[i]["y_ratio"];
    y_ratio.push(y_val)
  }

  const Agri = agri_land_data.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const Water = basic_water_data.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const Co2 = co2.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const Disorder = eating_disorder.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const Employed = employed.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const GDP_mapped = GDP.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  var myChart = document.getElementById("myChart").getContext('2d');

  var popChart = new Chart(myChart, {
    type: 'scatter',
    data:{
      datasets: [{
        label: 'Agriculture land per capita',
        data: Agri,
        backgroundColor: 'rgb(155, 95, 224)'
      }, {
        label: '% with Basic Water Services',
        data: Water,
        backgroundColor: 'rgb(22, 164, 216)'
      }, {
        label: 'CO2 per Agricultural Land',
        data: Co2,
        backgroundColor: 'rgb(96, 219, 232)'
      }, {
        label: '% with Eating Disorder',
        data: Disorder,
        backgroundColor: 'rgb(139, 211, 70)'
      }, {
        label: '% Employed in Agriculture',
        data: Employed,
        backgroundColor: 'rgb(249, 165, 44)'
      }, {
        label: 'GDP',
        data: GDP_mapped,
        backgroundColor: 'rgb(214, 78, 18)'
      }]
    },
    options:{
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text:'Units',
            font: { size: 24}
          }
        },
        y: {
          title: {
            display: true,
            text: 'Y ratio',
            font: { size: 24 }
          }
        }
      },
      plugins: {
        legend: {
          position: 'right',
          title: {
            display: true,
            text: 'Legend' ,
            font: { size: 20 }
          }
        },
        title: {
          position: 'top',
          align: 'center',
          display: true,
          text: 'Y Ratio against variables (Model 1)',
          font: { size: 30 }
        }
      }
    }
  })
})

// code to show graph for model 2
d3.csv(filemodel2).then(function(loadedData){
  let agri_land_data = [];
  let basic_water_data = [];
  let co2 = [];
  let eating_disorder = [];
  let employed = [];
  let GDP = [];
  let undernourished = []

  for (let i=0; i <loadedData.length; i++) {
    let agri_land = loadedData[i]["Agri_land_cap"];
    agri_land_data.push(agri_land)

    let basic_water = loadedData[i]["Basic_water"];
    basic_water_data.push(basic_water)

    let co2_val = loadedData[i]["CO2_agri"];
    co2.push(co2_val)

    let disorder_val = loadedData[i]["Eating_disorder"];
    eating_disorder.push(disorder_val)

    let employ_val = loadedData[i]["Employed_%"];
    employed.push(employ_val)

    let GDP_val = loadedData[i]["GDP"];
    GDP.push(GDP_val)

    let undernourished_val = loadedData[i]["Undernourishment"];
    undernourished.push(undernourished_val)
  }

  const Agri = agri_land_data.map((x,i) => {
    return {
      x: x,
      y: undernourished[i]
    }
  })

  const Water = basic_water_data.map((x,i) => {
    return {
      x: x,
      y: undernourished[i]
    }
  })

  const Co2 = co2.map((x,i) => {
    return {
      x: x,
      y: undernourished[i]
    }
  })

  const Disorder = eating_disorder.map((x,i) => {
    return {
      x: x,
      y: undernourished[i]
    }
  })

  const Employed = employed.map((x,i) => {
    return {
      x: x,
      y: undernourished[i]
    }
  })

  const GDP_mapped = GDP.map((x,i) => {
    return {
      x: x,
      y: undernourished[i]
    }
  })

  var myChart2 = document.getElementById("myChart2").getContext('2d');

  var popChart = new Chart(myChart2, {
    type: 'scatter',
    data:{
      datasets: [{
        label: 'Agriculture land per capita',
        data: Agri,
        backgroundColor: 'rgb(155, 95, 224)'
      }, {
        label: '% with Basic Water Services',
        data: Water,
        backgroundColor: 'rgb(22, 164, 216)'
      }, {
        label: 'CO2 per Agricultural Land',
        data: Co2,
        backgroundColor: 'rgb(96, 219, 232)'
      }, {
        label: '% with Eating Disorder',
        data: Disorder,
        backgroundColor: 'rgb(139, 211, 70)'
      }, {
        label: '% Employed in Agriculture',
        data: Employed,
        backgroundColor: 'rgb(249, 165, 44)'
      }, {
        label: 'GDP',
        data: GDP_mapped,
        backgroundColor: 'rgb(214, 78, 18)'
      }]
    },
    options:{
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text:'Units',
            font: { size: 24}
          }
        },
        y: {
          title: {
            display: true,
            text: '% Undernourished',
            font: { size: 24 }
          }
        }
      },
      plugins: {
        legend: {
          position: 'right',
          title: {
            display: true,
            text: 'Legend' ,
            font: { size: 20 }
          }
        },
        title: {
          position: 'top',
          align: 'center',
          display: true,
          text: '% Undernourished against variables (Model 2)',
          font: { size: 30 }
        }
      }
    }
  })
})

// code to show graph for model 3
d3.csv(filemodel3).then(function(loadedData){
  let basic_water_data = [];
  let carbohydrate = [];
  let protein = [];
  let fat = [];
  let eating_disorder = [];
  let employed = [];
  let GDP = [];
  let y_ratio= []

  for (let i=0; i <loadedData.length; i++) {
    let carbo = loadedData[i]["Carbohydrate"];
    carbohydrate.push(carbo)

    let fatty = loadedData[i]["Fat"];
    fat.push(fatty)

    let muscle = loadedData[i]["Protein"];
    protein.push(muscle)

    let basic_water = loadedData[i]["Basic_water"];
    basic_water_data.push(basic_water)

    let disorder_val = loadedData[i]["Eating_disorder"];
    eating_disorder.push(disorder_val)

    let employ_val = loadedData[i]["Employed_%"];
    employed.push(employ_val)

    let GDP_val = loadedData[i]["GDP"];
    GDP.push(GDP_val)

    let y_val = loadedData[i]["y_ratio"];
    y_ratio.push(y_val)
  }

  const Carbohydrates = carbohydrate.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const Fats = fat.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const Proteins = protein.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const Water = basic_water_data.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const Disorder = eating_disorder.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const Employed = employed.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  const GDP_mapped = GDP.map((x,i) => {
    return {
      x: x,
      y: y_ratio[i]
    }
  })

  var myChart3 = document.getElementById("myChart3").getContext('2d');

  var popChart = new Chart(myChart3, {
    type: 'scatter',
    data:{
      datasets: [{
        label: 'Carbohydrate',
        data: Carbohydrates,
        backgroundColor: 'rgb(155, 95, 224)'
      }, {
        label: 'Protein',
        data: Proteins,
        backgroundColor: 'rgb(96, 219, 232)'
      }, {
        label: 'Fat',
        data: Fats,
        backgroundColor: 'rgb(239, 223, 72)'
      }, {
        label: '% with Basic Water Services',
        data: Water,
        backgroundColor: 'rgb(22, 164, 216)'
      }, {
        label: '% with Eating Disorder',
        data: Disorder,
        backgroundColor: 'rgb(139, 211, 70)'
      }, {
        label: '% Employed in Agriculture',
        data: Employed,
        backgroundColor: 'rgb(249, 165, 44)'
      }, {
        label: 'GDP',
        data: GDP_mapped,
        backgroundColor: 'rgb(214, 78, 18)'
      }]
    },
    options:{
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text:'Units',
            font: { size: 24}
          }
        },
        y: {
          title: {
            display: true,
            text: 'Y ratio',
            font: { size: 24 }
          }
        }
      },
      plugins: {
        legend: {
          position: 'right',
          title: {
            display: true,
            text: 'Legend' ,
            font: { size: 20 }
          }
        },
        title: {
          position: 'top',
          align: 'center',
          display: true,
          text: 'Y ratio against variables (Model 3)',
          font: { size: 30 }
        }
      }
    }
  })
})