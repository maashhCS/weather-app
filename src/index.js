import { fetchApiData } from "./fetch_api";

const searchField = document.querySelector('#search-input-field');
const searchFieldButton = document.querySelector('#magnify-svg');
const searchFieldError = document.querySelector('.search-input-field-error')

searchFieldButton.addEventListener('click', () => {
    if(searchField.value === ''){
        searchFieldError.classList.remove('hidden');
        return;
    } else {
        searchFieldError.classList.add('hidden');
        fetchApiData(searchField.value);
    }
});

searchField.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        if(searchField.value === ''){
            searchFieldError.classList.remove('hidden');
            return;
        }
        searchFieldError.classList.add('hidden');
        fetchApiData(searchField.value);
    }
});