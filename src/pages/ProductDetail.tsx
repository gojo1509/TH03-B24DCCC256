import { useParams, useNavigate, Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { products, dispatch } = useProducts();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Không tìm thấy sản phẩm</p>;

  const handleDelete = () => {
    if (confirm("Xóa sản phẩm?")) {
      dispatch({ type: "DELETE_PRODUCT", payload: product.id });
      navigate("/");
    }
  };

  return (
    <>
      <h1>{product.ten}</h1>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia.toLocaleString()}đ</p>
      <p>Số lượng: {product.soLuong}</p>
      <p>Mô tả: {product.moTa}</p>

      <Link to={`/edit/${product.id}`}>Chỉnh sửa</Link>
      <button onClick={handleDelete}>Xóa</button>
    </>
  );
}
