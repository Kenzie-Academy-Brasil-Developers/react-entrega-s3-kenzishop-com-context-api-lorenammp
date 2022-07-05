import AddToCartBtn from "../AddToCartButton";
import Categories from "../Categories";

import {
  BookContainer,
  BookImgContainer,
  BookImg,
  BookTitle,
  BookAuthor,
  BookText,
  BookPrice,
} from "./styles";

function Book(props) {
  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.price);
  return (
    <BookContainer>
      <BookImgContainer>
        <BookImg src={props.img} alt={props.name} />
      </BookImgContainer>
      <BookTitle>{props.name}</BookTitle>
      <BookAuthor>{props.author}</BookAuthor>
      <BookText>{props.text}</BookText>
      <Categories categories={props.book.categories} />
      <BookPrice>{formatedPrice}</BookPrice>
      <AddToCartBtn book={props.book} />
    </BookContainer>
  );
}

export default Book;
