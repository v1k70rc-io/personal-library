const STATUS_MESSAGES = {
  idle: "",
  loading: "Searching books...",
  success: "",
  empty: "No books found.",
  error: "Unable to load books. Please try again",
};

export function renderSearchStatus(searchStatus, status) {
  searchStatus.textContent = STATUS_MESSAGES[status] ?? "";
}
