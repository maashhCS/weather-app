const apiUrl = 'http://api.weatherapi.com/v1/';
const apiKey = 'd7ad6837fd37407e8e0163826230105';

export async function fetchApiData(cityName){
    try {
        const temperatureData = await fetch(apiUrl + 'current.json?key=' + apiKey + '&q=' + cityName, {mode: 'cors', });
        if(temperatureData.status !== 200){
            return temperatureData.status;
        }
        const temperature = await temperatureData.json();
        console.log(temperature);
        return temperature;
    } catch (err) {
        console.log(err);
    }
}