export async function searchBooks(searchTerm) {
  const url = new URL("https://openlibrary.org/search.json");

  url.searchParams.set("q", searchTerm);
  url.searchParams.set("limit", "10");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Algo salio mal");
  }

  const data = await response.json();

  return data.docs;
}
