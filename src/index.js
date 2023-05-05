import { fetchApiData } from "./fetch_api";

const searchField = document.querySelector('.search-input-field input');
const searchFieldButton = document.querySelector('#magnify-svg');
const searchFieldError = document.querySelector('.search-input-field-error')

searchFieldButton.addEventListener('click', () => {
    if(searchField.value === ''){
        searchFieldError.classList.remove('hidden');
    } else {
        searchFieldError.classList.add('hidden');
        const temperatureData = fetchApiData(searchField.value);
    }
});