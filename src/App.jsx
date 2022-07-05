import GlobalStyle from "./styles/global";
import "./App.css";
import BooksList from "./components/BooksList";
import { BooksCatalogueProvider } from "./providers/bookscatalogue";

import { ToastContainer } from "react-toastify";
import { CartProvider } from "./providers/cart";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BooksCatalogueProvider>
        <CartProvider>
          <Header />
          <Carousel />
          <BooksList />
          <ToastContainer
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </CartProvider>
      </BooksCatalogueProvider>
    </div>
  );
}

export default App;
