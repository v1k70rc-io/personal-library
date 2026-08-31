import bookPlaceHolderUrl from "../assets/book-placeholder.svg";

function createBookElement(book) {
  const bookElement = document.createElement("li");
  bookElement.classList.add("book-card");

  const coverElement = document.createElement("img");
  coverElement.classList.add("book-card__cover");
  coverElement.src =
    book.coverUrl !== null ? book.coverUrl : bookPlaceHolderUrl;
  coverElement.alt =
    book.coverUrl !== null ? `Cover of ${book.title}` : "No cover available";
  coverElement.loading = "lazy";

  const bookContent = document.createElement("div");
  bookContent.classList.add("book-card__content");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("book-card__title");
  titleElement.textContent = book.title;

  const authorsElement = document.createElement("p");
  authorsElement.classList.add("book-card__authors");
  authorsElement.textContent =
    book.authors.length === 0 ? "Unknown authors" : book.authors.join(", ");

  const yearElement = document.createElement("p");
  yearElement.classList.add("book-card__year");
  yearElement.textContent =
    book.firstPublishedYear !== null
      ? book.firstPublishedYear
      : "Unknown published year";

  bookContent.append(titleElement, authorsElement, yearElement);
  bookElement.append(bookContent, coverElement);

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
