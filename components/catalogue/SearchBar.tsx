"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <input
      className="input w-full"
      placeholder="Rechercher un produit..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
