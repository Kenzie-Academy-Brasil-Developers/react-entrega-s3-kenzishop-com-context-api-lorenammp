import {
  CartContainer,
  CloseButton,
  CartTitle,
  CartList,
  TotalPrice,
  BuyCartButton,
  EmpytCartMsg,
} from "./styles";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import CartBooks from "../CartBooks";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function CartDrawer(props) {
  const { cart } = useContext(CartContext);

  const totalPrice = () => {
    const total = cart.reduce((a, b) => a + b.price, 0);
    return total;
  };

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice());

  return (
    <CartContainer>
      <Drawer
        sx={{ width: 300 }}
        anchor="right"
        open={props.open}
        onClose={props.toggleDrawer(false)}
      >
        <CloseButton>
          <IconButton onClick={props.toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </CloseButton>
        <CartTitle>Carrinho de compras</CartTitle>
        <CartList>
          {cart.length !== 0
            ? cart.map((book, index) => <CartBooks key={index} book={book} />)
            : null}
        </CartList>
        {cart.length !== 0 ? (
          <>
            <TotalPrice>
              <div>Total:</div>
              <div>{formatedPrice}</div>
            </TotalPrice>
            <BuyCartButton>Finalizar compra</BuyCartButton>
          </>
        ) : (
          <EmpytCartMsg>
            <div>Seu carrinho está vazio.</div>
            <div>Adicione alguns produtos!</div>
          </EmpytCartMsg>
        )}
      </Drawer>
    </CartContainer>
  );
}

export default CartDrawer;
