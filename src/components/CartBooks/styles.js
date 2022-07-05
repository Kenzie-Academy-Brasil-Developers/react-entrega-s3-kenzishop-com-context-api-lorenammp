import styled from "styled-components";

export const CartItem = styled.li`
  width: 100%;

  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const CartImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

export const CartText = styled.div`
  width: 64%;
`;

export const CartTitle = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 14px;
  font-weight: 700;
  color: var(--pink);
`;

export const CartAuthor = styled.h5`
  font-size: 12px;
  font-weight: 500;
  color: var(--dark-blue);
`;

export const CartPrice = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 700;
  color: var(--blue);
`;

export const CartRemoveButton = styled.button`
  border: none;

  background-color: transparent;

  color: var(--medium-gray);

  transition: all 0.25s;

  &:hover {
    color: var(--yellow);
  }
`;
