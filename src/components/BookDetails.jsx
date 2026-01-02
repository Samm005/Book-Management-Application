import { useParams } from "react-router-dom";
import { Books } from "../utils/mockdata";

function BookDetails() {
  const params = useParams();
  const book = Books.filter((book) => book.id == params.id);
  return (
    <>
      <h1>{`Book details for book with id ${params.id}`}</h1>
      {book.map((data) => {
        return (
          <>
            <h2>{data.title}</h2>
            <h2>{data.pages}</h2>
            <img
              src={data.coverImage}
              alt={data.description}
              width="200px"
              height="200px"
            />
          </>
        );
      })}
    </>
  );
}

export default BookDetails;
