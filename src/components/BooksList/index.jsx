import { BookList } from "./styles";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/bookscatalogue";
import Book from "../Book";

const BooksList = () => {
  const { booksCatalogue } = useContext(CatalogueContext);

  return (
    <BookList>
      {booksCatalogue.map((book) => (
        <Book
          key={book.id}
          img={book.img}
          name={book.name}
          author={book.author}
          text={book.description}
          price={book.price}
          categories={book.categories}
          book={book}
        />
      ))}
    </BookList>
  );
};

export default BooksList;
