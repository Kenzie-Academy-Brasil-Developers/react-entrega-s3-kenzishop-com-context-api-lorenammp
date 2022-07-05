import styled from "styled-components";

export const BookList = styled.ul`
  width: 70vw;

  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  @media (max-width: 768px) {
    width: 90vw;
  }
`;
