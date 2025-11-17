import { Link } from "react-router-dom";
import { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card">
      <h3>{product.ten}</h3>
      <p>Giá: {product.gia.toLocaleString()}đ</p>
      <p>Danh mục: {product.danhMuc}</p>
      <Link to={`/products/${product.id}`}>Chi tiết</Link>
    </div>
  );
}
