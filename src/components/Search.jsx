import BookList from "./components/BookList";
import { Books } from "./utils/mockdata";
import "./components/style.css";
import Header from "./components/Header";
import { useState } from "react";

function Search() {
  const [searchText, setSearchState] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);

  function handleSearch() {
    const filterBooks = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filterBooks);
  }

  return (
    <>
      <Header />
      <div className="search">
        <h1>Search a book</h1>
        <div>
          <input
            type="text"
            placeholder="Search for a book"
            onChange={(e) => setSearchState(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <BookList BooksData={filteredBooks} />
    </>
  );
}

export default Search;
