export default function WhyUs() {
  return (
    <section className="bg-surface py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Pourquoi choisir Snow Wild ?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <h3 className="font-semibold mb-2">Réservation rapide</h3>
            <p className="text-muted">En quelques clics seulement</p>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold mb-2">Matériel de qualité</h3>
            <p className="text-muted">Équipements récents et entretenus</p>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold mb-2">Paiement sécurisé</h3>
            <p className="text-muted">Transaction simple et fiable</p>
          </div>
        </div>
      </div>
    </section>
  );
}
