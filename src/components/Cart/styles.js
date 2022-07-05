import styled from "styled-components";

export const CartContainer = styled.div`
  width: 350px;
`;

export const CloseButton = styled.div`
  margin: 10px 0;
`;

export const CartTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  color: var(--white);

  margin-bottom: 20px;

  background-color: var(--pink);
`;

export const CartList = styled.ul`
  width: 350px;

  padding: 10px;
`;

export const TotalPrice = styled.div`
  width: 95%;

  display: flex;
  justify-content: space-between;

  background-color: var(--light-gray);

  margin: 10px;
  padding: 0 10px;

  font-size: 14px;
  font-weight: 700;
  line-height: 40px;
  color: var(--dark-gray);
`;

export const BuyCartButton = styled.button`
  border: none;

  width: 95%;

  background-color: var(--green);

  margin: 10px;
  padding: 0 10px;

  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 40px;
  color: var(--white);
  transition: all 0.25s;

  &:hover {
    background-color: var(--blue);
  }
`;

export const EmpytCartMsg = styled.div`
  margin: 0 auto;

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: var(--pink);
`;
