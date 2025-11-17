import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

export default function Home() {
  const { products } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [page, setPage] = useState(1);

  const filtered = products
    .filter((p) => p.ten.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category ? p.danhMuc === category : true))
    .filter((p) => (min ? p.gia >= Number(min) : true))
    .filter((p) => (max ? p.gia <= Number(max) : true));

  const perPage = 6;
  const totalPages = Math.ceil(filtered.length / perPage);
  const currentPageData = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar
        category={category}
        setCategory={setCategory}
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
      />

      <ProductList products={currentPageData} />

      <Pagination current={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
