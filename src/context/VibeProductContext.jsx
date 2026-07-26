import { createContext, useState } from "react";

const VibeProductContext = createContext({
  products: [],
  addProduct: () => {},
  deleteProduct: () => {},
  fetchProducts: () => [],
});

const VibeProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Black Marker",
      quantity: 10,
    },
    {
      id: 2,
      name: "Display Material",
      quantity: 20,
    },
    {
      id: 3,
      name: "Flower Pots",
      quantity: 5,
    },
  ]);

  const addProduct = (product) => {
    setProducts((currentProducts) => [...currentProducts, product]);
  };

  const deleteProduct = (productId) => {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  };

  const fetchProducts = () => products;

  return (
    <VibeProductContext.Provider
      value={{ products, addProduct, deleteProduct, fetchProducts }}
    >
      {children}
    </VibeProductContext.Provider>
  );
};

export { VibeProductContext, VibeProductProvider };