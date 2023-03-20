fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
        // const globalData = data.Global;
        // const totalCases = globalData.TotalConfirmed;
        // const totalDeaths = globalData.TotalDeaths;
        // const totalRecovered = globalData.TotalRecovered;
        // console.log(globalData)
        console.log(data)
        console.log("date", data.Date)

        console.log(data)
        console.log("massage", data.Message)

        // document.querySelector('#total').innerHTML = totalCases
        // document.querySelector('#death').innerHTML = totalDeaths
        // document.querySelector('#recovered').innerHTML = totalRecovered
    })
    .catch(error => console.error(error));