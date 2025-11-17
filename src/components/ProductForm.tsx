import { useState } from "react";
import { Product } from "../types";
import { validateProduct } from "../utils/validators";

interface Props {
  initialData?: Product;
  onSubmit: (value: Omit<Product, "id"> | Product) => void;
}

export default function ProductForm({ initialData, onSubmit }: Props) {
  const [data, setData] = useState<Product>(
    initialData || {
      id: 0,
      ten: "",
      danhMuc: "",
      gia: 0,
      soLuong: 0,
      moTa: "",
    }
  );

  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const err = validateProduct(data);
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tên"
        value={data.ten}
        onChange={(e) => setData({ ...data, ten: e.target.value })}
      />
      {errors.ten && <p>{errors.ten}</p>}

      <select
        value={data.danhMuc}
        onChange={(e) => setData({ ...data, danhMuc: e.target.value })}
      >
        <option value="">Chọn danh mục</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select>
      {errors.danhMuc && <p>{errors.danhMuc}</p>}

      <input
        type="number"
        placeholder="Giá"
        value={data.gia}
        onChange={(e) => setData({ ...data, gia: Number(e.target.value) })}
      />
      {errors.gia && <p>{errors.gia}</p>}

      <input
        type="number"
        placeholder="Số lượng"
        value={data.soLuong}
        onChange={(e) => setData({ ...data, soLuong: Number(e.target.value) })}
      />
      {errors.soLuong && <p>{errors.soLuong}</p>}

      <textarea
        placeholder="Mô tả"
        value={data.moTa}
        onChange={(e) => setData({ ...data, moTa: e.target.value })}
      />

      <button type="submit">Lưu</button>
    </form>
  );
}
