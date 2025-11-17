import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";

export default function EditProduct() {
  const { id } = useParams();
  const { products, dispatch } = useProducts();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Không tìm thấy sản phẩm</p>;

  const handleEdit = (data: any) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: data });
    navigate("/");
  };

  return <ProductForm initialData={product} onSubmit={handleEdit} />;
}
