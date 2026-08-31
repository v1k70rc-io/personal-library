import bookPlaceHolderUrl from "../assets/book-placeholder.svg";

function createBookElement(book) {
  const bookElement = document.createElement("li");

  const coverElement = document.createElement("img");
  coverElement.src =
    book.coverUrl !== null ? book.coverUrl : bookPlaceHolderUrl;
  coverElement.alt =
    book.coverUrl !== null ? `Cover of ${book.title}` : "No cover available";
  coverElement.loading = "lazy";

  const titleElement = document.createElement("h2");
  titleElement.textContent = book.title;

  const authorsElement = document.createElement("p");
  authorsElement.textContent =
    book.authors.length === 0 ? "Unknown authors" : book.authors.join(", ");

  const yearElement = document.createElement("p");
  yearElement.textContent =
    book.firstPublishedYear !== null
      ? book.firstPublishedYear
      : "Unknown published year";

  bookElement.append(coverElement, titleElement, authorsElement, yearElement);

  return bookElement;
}

export function renderBooks(books, resultsList) {
  const fragment = document.createDocumentFragment();

  for (const book of books) {
    const bookElement = createBookElement(book);

    fragment.appendChild(bookElement);
  }

  resultsList.replaceChildren(fragment);
}
