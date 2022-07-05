import { CategoryContainer, Category } from "./styles";

function Categories(props) {
  return (
    <CategoryContainer>
      {props.categories.map((cat) => (
        <Category>{cat}</Category>
      ))}
    </CategoryContainer>
  );
}

export default Categories;
