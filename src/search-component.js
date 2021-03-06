import { searchToHash } from './query-functions.js';

const searchForm = document.getElementById('search-form');
const searchTermInput = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = searchTermInput.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = searchToHash(existingQuery, searchTerm);
    window.location.hash = newQuery;
});

export function updateSearchField(searchTerm) {
    searchTermInput.value = searchTerm;
}
