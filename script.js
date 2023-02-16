console.log('logged message')

let countriesData = []

const rootElement = document.querySelector('#root')

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(responseJson => {
    console.log(responseJson)
    countriesData = responseJson

    for (let index = 215; index < 225; index++) {
      rootElement.insertAdjacentHTML('beforeend', `
        <div class="card">
          <h2>${countriesData[index].name.common}</h2>
          <h3>${countriesData[index].population}</h3>
          <h4>${countriesData[index].flag}</h4>
          <h5>${countriesData[index].area}</h5>
        </div>
      `)
    }
  })
