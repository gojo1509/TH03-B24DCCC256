interface Props {
  current: number;
  totalPages: number;
  setPage: (p: number) => void;
}

export default function Pagination({ current, totalPages, setPage }: Props) {
  return (
    <div>
      <button disabled={current === 1} onClick={() => setPage(current - 1)}>
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          style={{ fontWeight: current === i + 1 ? "bold" : undefined }}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={current === totalPages}
        onClick={() => setPage(current + 1)}
      >
        Next
      </button>
    </div>
  );
}
