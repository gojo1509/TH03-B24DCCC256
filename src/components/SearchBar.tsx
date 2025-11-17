interface Props {
  search: string;
  setSearch: (v: string) => void;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Tìm kiếm..."
    />
  );
}
