import BookList from "./components/BookList";
import { Books } from "./utils/mockdata";
import "./components/style.css";
import { useState } from "react";

function App() {
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

export default App;
