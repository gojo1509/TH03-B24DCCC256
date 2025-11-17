import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";
import { Product } from "../types";

export default function AddProduct() {
  const { products, dispatch } = useProducts();
  const navigate = useNavigate();

  const handleAdd = (data: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...data,
      id: products.length ? products[products.length - 1].id + 1 : 1,
    };

    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    navigate("/");
  };

  return <ProductForm onSubmit={handleAdd} />;
}
