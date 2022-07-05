import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;

  margin-bottom: 50px;

  background-color: var(--light-gray);
`;

export const HeaderContent = styled.div`
  width: 70vw;
  height: 100%;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const HeaderLogo = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.div`
  color: var(--pink);
  font-size: 70px;

  margin-top: 15px;
`;

export const LogoText = styled.div`
  margin-left: 20px;
`;

export const LogoMain = styled.h1`
  font-family: "Playfair Display SC", serif;
  font-size: 34.5px;
  font-weight: 700;
  color: var(--pink);
`;

export const LogoSmallText = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2.5px;
  color: var(--blue);
`;

export const Menu = styled.div`
  width: 50%;

  font-size: 26px;
  color: var(--pink);

  display: flex;
  justify-content: flex-end;
`;

export const CartIcon = styled.div`
  position: absolute;
  font-size: 26px;

  cursor: pointer;

  transition: all 0.25s;

  &:hover {
    color: var(--yellow);
  }
`;

export const CartCount = styled.div`
  width: 16px;

  border-radius: 10px;

  position: relative;
  left: 20px;
  bottom: 40px;

  background-color: var(--blue);

  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: var(--white);
`;
