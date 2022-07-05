import { createContext, useState } from "react";

export const CatalogueContext = createContext([]);

export const BooksCatalogueProvider = ({ children }) => {
  const [booksCatalogue, setBooksCatalogue] = useState([
    {
      name: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      img: "https://i.ibb.co/BNJv0Cc/img1.png",
      description:
        "Bear claw cheesecake macaroon tiramisu candy cheesecake. Oat cake lollipop marzipan lollipop chocolate tiramisu. Fruitcake liquorice jelly chocolate bar sugar plum brownie.",
      price: 15,
      categories: ["Fiction", "Classic literature"],
      id: 1,
    },
    {
      name: "The Chronicles of Narnia",
      author: "C. S. Lewis",
      img: "https://i.ibb.co/C7yCPk8/img2.png",
      description:
        "Cake biscuit chocolate bonbon biscuit muffin lemon drops icing. Chocolate cake shortbread marzipan croissant marzipan chocolate bar.",
      price: 22.49,
      categories: ["Fantasy", "Children's literature"],
      id: 2,
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      author: "J. K. Rowling",
      img: "https://i.ibb.co/9TmWdyS/img3.png",
      description:
        "Wafer cupcake danish bonbon cotton candy cake. Carrot cake candy donut pie brownie cheesecake jelly beans. Icing shortbread marshmallow fruitcake toffee croissant candy canes dessert.",
      price: 8.99,
      categories: ["Fantasy"],
      id: 3,
    },
    {
      name: "The Hobbit",
      author: "J. R. R. Tolkien",
      img: "https://i.ibb.co/kGR6QCG/img4.png",
      description:
        "Sweet roll apple pie tiramisu gummies cupcake pastry jujubes sweet gingerbread. Cookie jelly beans fruitcake pastry dessert lollipop gingerbread.",
      price: 15.49,
      categories: ["High Fantasy", "Juvenile literature"],
      id: 4,
    },
    {
      name: "Harry Potter and the Philosopher's Stone - Hard Cover",
      author: "J. K. Rowling",
      img: "https://i.ibb.co/t4vPWGD/img5.png",
      description:
        "Jelly beans pie cookie croissant lollipop marshmallow lollipop chocolate bar lollipop. Bonbon sugar plum muffin liquorice gingerbread muffin danish.",
      price: 24,
      categories: ["Fantasy", "Classic literature"],
      id: 5,
    },
    {
      name: "The Two Towers",
      author: "J. R. R. Tolkien",
      img: "https://i.ibb.co/zVN4Xx8/img6.png",
      description:
        "Lemon drops jelly beans sesame snaps wafer tiramisu jelly-o chupa chups. Halvah muffin tiramisu sugar plum sweet roll sesame snaps dragée shortbread gummies.",
      price: 15.99,
      categories: ["Fantasy"],
      id: 6,
    },
    {
      name: "Harry Potter and the Order of the Phoenix",
      author: "J. K. Rowling",
      img: "https://i.ibb.co/mJ90Y8x/img7.png",
      description:
        "Biscuit liquorice apple pie wafer wafer jujubes carrot cake caramels. Toffee cake tootsie roll dragée ice cream muffin soufflé jelly beans pudding.",
      price: 10.99,
      categories: ["Fantasy"],
      id: 7,
    },
    {
      name: "Frankenstein",
      author: "Mary Shelley",
      img: "https://i.ibb.co/LnSdHPQ/img8.png",
      description:
        "Ice cream cupcake bonbon shortbread biscuit carrot cake. Cookie carrot cake lemon drops liquorice biscuit oat cake apple pie croissant. Lemon drops jelly beans sesame snaps wafer tiramisu jelly-o chupa chups.",
      price: 15,
      categories: ["Science fiction", "Horror fiction"],
      id: 8,
    },
  ]);

  return (
    <CatalogueContext.Provider value={{ booksCatalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
