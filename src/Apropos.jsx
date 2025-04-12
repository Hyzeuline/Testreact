export function Apropos({ statut, description }) {
  return (
    <div className="Apropos">
      <h2>Voison Iseline</h2>
      <p>{statut}</p>
      <h2>A propos de moi</h2>
      <p> {description}</p>
    </div>
  );
}
