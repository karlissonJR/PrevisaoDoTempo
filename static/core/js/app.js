function getWeather(data) {
    let city = data.name_without_accent
    let state = data.state.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    city = city.toLowerCase();
    state = state.toLowerCase();

    city = city.split(' ').join('+')
    state = state.split(' ').join('+')

    axios.get(`http://api.worldweatheronline.com/premium/v1/weather.ashx/?key=${WEATHER_API_KEY}&q=${city},${state},brazil&format=json`)
    .then(function (response) {
        weatherForecast(response.data.data)
    })
}

function weatherForecast(data) {
    current_temperature = document.querySelector('section#current_temperature p')
    current_temperature_logo = document.querySelector('section#current_temperature img')
    weather_forecast = document.querySelectorAll('section#weather_forecast div')
    max_temp_list = document.querySelectorAll('p.max_temp')
    min_temp_list = document.querySelectorAll('p.min_temp')
    date = document.querySelectorAll('p.weather_forecast_date') 
    day = document.querySelectorAll('p.weather_forecast_day')
    weather_logo = document.querySelectorAll('img.weather_logo')

    const current_condition = data.current_condition[0]

    current_temperature.innerHTML = current_condition.temp_C + ' °C'
    current_temperature_logo.src = current_condition.weatherIconUrl[0].value

    const { weather } = data

    weather_forecast.forEach((element, index) => {
        element.setAttribute('class', 'weather_card')
        //element.style.backgroundImage = `url(${weather[index].hourly[3].weatherIconUrl[0].value})`;
    })

    weather.forEach((element, index) => {
        //console.log(element.date)
        date[index].innerHTML = formatDate(element.date)
        max_temp_list[index].innerHTML = element.maxtempC + ' °C'
        min_temp_list[index].innerHTML = element.mintempC + ' °C'
        let baseDate = new Date(element.date)
        baseDate.setDate(baseDate.getDate() + 1)
        day[index].innerHTML = baseDate.toLocaleDateString('pt-BR', { weekday: 'short' })
        console.log('Mínima = ', element.mintempC + ' °C')
        weather_logo[index].src = weather[index].hourly[3].weatherIconUrl[0].value
        weather_logo[index].style.display = 'block'
    })
}