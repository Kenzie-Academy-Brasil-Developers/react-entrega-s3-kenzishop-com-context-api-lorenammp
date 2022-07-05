import { CategoryContainer, Category } from "./styles";

function Categories(props) {
  return (
    <CategoryContainer>
      {props.categories.map((cat, index) => (
        <Category key={index}>{cat}</Category>
      ))}
    </CategoryContainer>
  );
}

export default Categories;
