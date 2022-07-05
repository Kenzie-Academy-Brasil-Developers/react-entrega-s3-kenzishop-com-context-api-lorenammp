import {
  CartItem,
  CartImg,
  CartText,
  CartTitle,
  CartAuthor,
  CartPrice,
  CartRemoveButton,
} from "./styles";

import DeleteIcon from "@mui/icons-material/Delete";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function CartBooks({ book }) {
  const { removeFromCart } = useContext(CartContext);

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(book.price);

  const notifySuccess = () => toast.success("Livro removido do carrinho!");

  const handleRemoveCart = () => {
    removeFromCart(book);
    notifySuccess();
  };
  return (
    <CartItem>
      <CartImg src={book.img} />
      <CartText>
        <CartTitle>{book.name}</CartTitle>
        <CartAuthor>{book.author}</CartAuthor>
        <CartPrice>{formatedPrice}</CartPrice>
      </CartText>
      <CartRemoveButton>
        <DeleteIcon onClick={handleRemoveCart} />
      </CartRemoveButton>
    </CartItem>
  );
}

export default CartBooks;
