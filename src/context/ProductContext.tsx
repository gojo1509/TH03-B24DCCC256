import { createContext, useReducer, ReactNode, useContext } from "react";
import { Product, ActionType } from "../types";
import { initialProducts } from "../data/initialProducts";

interface ProductContextType {
  products: Product[];
  dispatch: React.Dispatch<ActionType>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const productReducer = (state: Product[], action: ActionType): Product[] => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "UPDATE_PRODUCT":
      return state.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
    case "DELETE_PRODUCT":
      return state.filter((p) => p.id !== action.payload);
    default:
      return state;
  }
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used inside ProductProvider");
  return context;
};
