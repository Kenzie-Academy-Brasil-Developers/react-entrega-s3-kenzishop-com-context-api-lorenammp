import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  LogoIcon,
  LogoText,
  LogoMain,
  LogoSmallText,
  Menu,
  CartIcon,
  CartCount,
} from "./styles";

import { useContext, useState } from "react";

import Cart from "../Cart";

import { GiSecretBook } from "react-icons/gi";

import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../providers/cart";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const { cart } = useContext(CartContext);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenModal(open);
  };
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <LogoIcon>
            <GiSecretBook />
          </LogoIcon>
          <LogoText>
            <LogoMain>Bookstan</LogoMain>
            <LogoSmallText>sua livraria digital</LogoSmallText>
          </LogoText>
        </HeaderLogo>
        <Menu>
          <CartIcon onClick={toggleDrawer(true)}>
            <FaShoppingCart />
            <CartCount>{cart.length}</CartCount>
          </CartIcon>
        </Menu>
      </HeaderContent>

      <Cart open={openModal} toggleDrawer={toggleDrawer}></Cart>
    </HeaderContainer>
  );
}

export default Header;
