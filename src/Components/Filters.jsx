
export default function Filters({ filter, setFilter }) {
  const options = ["all", "active", "completed"];

  return (
    <div className="filters">
      {options.map((o) => (
        <button
          key={o}
          className={filter === o ? "active" : ""}
          onClick={() => setFilter(o)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}