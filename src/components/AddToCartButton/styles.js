import styled from "styled-components";

export const AddButton = styled.button`
  border: none;

  background-color: var(--yellow);

  width: 100%;

  margin-top: 30px;

  font-size: 12px;
  font-weight: 700;
  line-height: 40px;
  color: var(--dark-blue);

  transition: all 0.25s;

  &:hover {
    box-shadow: inset 36em 0 0 0 var(--dark-blue);
    color: var(--yellow);
  }
`;
