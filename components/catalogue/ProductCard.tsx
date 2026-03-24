import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ product }: any) {
  return (
    <div className="card">
      <h3 className="font-semibold mb-2">{product.name}</h3>
      <p className="text-muted mb-2">{product.category}</p>
      Taille:
      <div className="flex w-full flex-wrap justify-start items-center gap-1">
        {product?.variants?.map((v: { id: string; size: string }) => (
          <Badge variant="default" key={v.id} className="text-sm bg-blue-50">
            {v.size}
          </Badge>
        ))}
      </div>
      <p className="font-bold mb-4">{product?.pricePerDay} € / jour</p>
      <Button size="sm" className="btn-primary w-full">
        Ajouter au panier
      </Button>
    </div>
  );
}
