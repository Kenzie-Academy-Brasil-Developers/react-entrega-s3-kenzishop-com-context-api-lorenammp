import { AddButton } from "./styles";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function AddToCartBtn({ book }) {
  const notifyError = () => toast.error("Livro já está no carrinho!");
  const notifySuccess = () => toast.success("Livro adicionado ao carrinho!");

  const { cart, addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart(book);
    console.log(cart);
  };
  return <AddButton onClick={handleClick}>Adicionar ao carrinho</AddButton>;
}

export default AddToCartBtn;
