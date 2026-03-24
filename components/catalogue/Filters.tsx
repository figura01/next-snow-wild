"use client";

export default function Filters() {
  const categories = ["SKI", "SNOWBOARD", "SHOES", "HELMET"];

  return (
    <div className="w-64 space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Catégories</h3>

        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex gap-2 items-center">
              <input type="checkbox" />
              {cat}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
