import { changeContent } from "./change_content";

export const cityNotFound = document.querySelector('.search-input-field-error-city-not-found');
const apiUrl = 'https://api.weatherapi.com/v1/';
const apiKey = 'd7ad6837fd37407e8e0163826230105';

export async function fetchApiData(cityName){
    try {
        const temperatureData = await fetch(apiUrl + 'current.json?key=' + apiKey + '&q=' + cityName, {mode: 'cors', });
        if(temperatureData.status !== 200){
            cityNotFound.classList.remove('hidden');
            return;
        }
        const temperature = await temperatureData.json();
        cityNotFound.classList.add('hidden');
        changeContent(temperature);
    } catch (err) {
        console.log(err);
    }
}