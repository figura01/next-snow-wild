import ProductGrid from "@/components/catalogue/ProductGrid";
import Filters from "@/components/catalogue/Filters";
import SearchBar from "@/components/catalogue/SearchBar";

export default function CatalogPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Catalogue</h1>

      <SearchBar />

      <div className="flex gap-8 mt-6">
        <Filters />

        <ProductGrid />
      </div>
    </div>
  );
}
