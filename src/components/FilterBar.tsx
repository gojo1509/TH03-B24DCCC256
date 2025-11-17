interface Props {
  category: string;
  setCategory: (v: string) => void;
  min: string;
  max: string;
  setMin: (v: string) => void;
  setMax: (v: string) => void;
}

export default function FilterBar({
  category,
  setCategory,
  min,
  max,
  setMin,
  setMax,
}: Props) {
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Tất cả</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select>

      <input
        placeholder="Min"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        placeholder="Max"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
    </div>
  );
}
