const categories = [
  { name: "Skis" },
  { name: "Snowboards" },
  { name: "Chaussures" },
  { name: "Bâtons" },
  { name: "Casques" },
];

export default function Categories() {
  return (
    <section className="container py-16">
      <h2 className="text-2xl font-semibold mb-8">Catégories</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="card text-center cursor-pointer hover:scale-105 transition"
          >
            <p className="font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
