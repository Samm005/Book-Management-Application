import { Link } from "react-router-dom";
import Book from "./Book";
import "./style.css";

function BookList(props) {
  return (
    <div className="booklist">
      {props.BooksData.map((data) => (
        <Link to={`/book/${data.id}`}>
          <Book key={data.id} bookDetails={data} />
        </Link>
      ))}
    </div>
  );
}

export default BookList;
