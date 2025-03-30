export function Day({ number }) {
  return (
    <div className="day">
      <h2>Jour {number}</h2>
      <div className="menus">
        <h3>Déjeuner</h3>
        <h4>Entrée</h4>
        <div>Carotte râpée vinaigrette</div>
        <h4>Plat</h4>
        <div>Boeuf bourguignon</div>
        <h4>Dessert</h4>
        <div>Salade de fruits</div>
      </div>
      <div className="dinners">
        <h3>Dîner</h3>
        <h4>Entrée</h4>
        <div>Poireau vinaigrette</div>
        <h4>Plat</h4>
        <div>Lasagnes</div>
        <h4>Dessert</h4>
        <div>crème chocolat</div>
      </div>
    </div>
  );
}
