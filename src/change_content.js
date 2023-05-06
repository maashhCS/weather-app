const cityName = document.querySelector('.city-name');
const cityTemperature = document.querySelector('.city-temperature');
const cityHumidity = document.querySelector('.city-humidity h5');
const cityHumiditySVG = document.querySelector('.weather-humidity-img');
const cityWind = document.querySelector('.city-wind h5');
const cityWindSVG = document.querySelector('.weather-wind-img');

export function changeContent(temperature){
    cityName.innerText = `${temperature.location.name}, ${temperature.location.country}`;
    cityTemperature.innerText = `${temperature.current.temp_c} °C`;
    cityHumiditySVG.classList.remove('hidden');
    cityHumidity.innerText = `${temperature.current.humidity}%`;
    cityWindSVG.classList.remove('hidden');
    cityWind.innerText = `${temperature.current.wind_kph}km/h`;
}
