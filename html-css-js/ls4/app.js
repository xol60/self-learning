var input = document.querySelector('#weather .input-search')
input.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        getWeather(event.target.value)
        input.value = ''
    }
})
function changeWeatherUI(weather) {
    document.querySelector('.info .city').innerHTML = weather.name;
    document.querySelector('.info .country').innerHTML = weather.sys.country

    document.querySelector('.info .time').innerHTML = new Date(+weather.dt * 1000).toLocaleString()
    document.querySelector('.info .temporary').innerHTML = weather.main.temp;
    document.querySelector('.info .short-desc').innerHTML = weather.weather[0].main
    document.querySelector('.info .more-desc .visibility span').innerHTML = weather.visibility;
    document.querySelector('.info .more-desc .wind span').innerHTML = weather.wind.speed;
    document.querySelector('.info .more-desc .cloud span').innerHTML = weather.clouds.all;
    if (+weather.main.temp >= 18) {
        document.body.className = 'hot'
    }
    else {
        document.body.className = 'cold'
    }

}
async function getWeather(input) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

    const res = await fetch(url)

    const weather = await res.json()

    if (weather.cod == "404") {
        alert(weather.message);
    } else {
        changeWeatherUI(weather)
    }
}
getWeather('Ha noi')