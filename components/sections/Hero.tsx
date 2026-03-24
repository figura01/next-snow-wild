"use client";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto py-20">
        <div className="flex flex-col text-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Louez votre équipement de ski en toute simplicité
          </h1>

          <p className="text-muted mb-8">
            Skis, snowboards, chaussures et casques disponibles immédiatement
          </p>

          {/* Search bar */}
          <div className="card flex flex-col md:flex-row gap-4">
            <input className="input" placeholder="Rechercher un produit..." />

            <input type="date" className="input" />

            <input type="date" className="input" />

            <button className="btn-primary">Rechercher</button>
          </div>
        </div>
      </div>
    </section>
  );
}
