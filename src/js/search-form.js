export function initSearchForm(onSearch) {
  const searchForm = document.querySelector('[data-js="search-form"]');
  const searchInput = document.querySelector('[data-js="search-input"]');
  const searchError = document.querySelector('[data-js="search-error"]');

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
      searchError.textContent = "The search field cannot be empty.";
      return;
    }

    searchError.textContent = "";

    onSearch(searchTerm);
  });
}
