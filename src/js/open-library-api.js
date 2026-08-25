function normalizeBook(book) {
  return {
    id: book.key,
    title: book.title,
    authors: book.author_name ?? [],
    firstPublishedYear: book.first_publish_year ?? null,
    coverId: book.cover_i ?? null,
  };
}

export async function searchBooks(searchTerm) {
  const url = new URL("https://openlibrary.org/search.json");

  url.searchParams.set("q", searchTerm);
  url.searchParams.set("limit", "10");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Algo salio mal");
  }

  const data = await response.json();

  return data.docs.map((book) => {
    return normalizeBook(book);
  });
}
