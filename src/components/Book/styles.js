import styled from "styled-components";

export const BookContainer = styled.li`
  min-height: 300px;

  padding: 5px;
  margin-bottom: 20px;

  border: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    border-color: var(--pink);
  }

  @media (max-width: 768px) {
    padding: 0;
    border: none;
  }
`;

export const BookImgContainer = styled.div`
  width: 100%;
  height: 170px;

  overflow: hidden;
`;

export const BookImg = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;

  transition: all 0.25s;

  &:hover {
    transform: scale(1.3);
  }
`;

export const BookTitle = styled.h2`
  margin-top: 15px;

  font-family: "Playfair Display", serif;
  font-size: 20px;
  color: var(--blue);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookAuthor = styled.h3`
  padding-left: 2px;
  color: var(--yellow);

  font-size: 14px;
  font-weight: 400;
`;

export const BookText = styled.div`
  margin-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-size: 12px;
  line-height: 24px;
  color: var(--dark-gray);
`;

export const BookPrice = styled.div`
  margin-top: 15px;

  font-size: 20px;
  font-weight: 700;
  color: var(--pink);
`;
