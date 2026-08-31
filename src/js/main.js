import { initSearchForm } from "./search-form.js";
import { searchBooks } from "./open-library-api.js";
import { renderBooks } from "./render-books.js";
import { renderSearchStatus } from "./render-search-status.js";

const searchResults = document.querySelector('[data-js="search-results"]');
const searchStatus = document.querySelector('[data-js="search-status"]');

async function handleSearch(searchTerm) {
  renderSearchStatus(searchStatus, "loading");

  try {
    const books = await searchBooks(searchTerm);

    if (books.length === 0) {
      renderBooks([], searchResults);
      renderSearchStatus(searchStatus, "empty");
      return;
    }

    renderBooks(books, searchResults);
    renderSearchStatus(searchStatus, "success");
  } catch (error) {
    renderBooks([], searchResults);
    renderSearchStatus(searchStatus, "error");
    console.error(error);
  }
}

initSearchForm(handleSearch);
