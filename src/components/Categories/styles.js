import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Category = styled.div`
  background-color: var(--light-gray);

  padding: 0 10px;
  margin: 15px 0;

  border-radius: 4px;

  font-size: 10px;
  line-height: 20px;
  color: var(--pink);

  cursor: default;
  transition: all 0.25s;

  &:hover {
    background-color: var(--pink);
    color: var(--yellow);
  }
`;
