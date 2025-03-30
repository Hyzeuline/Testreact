const projets = [
  {
    name: "La machine à menus",
    description:
      "Outil pour générer automatiquement des propositions de menus équilibrés pour la semaine avec des idées gourmandes et diversifiées. La fonctionnalité a été développée avec une interface Javascript, le design avec le logiciel Figma et la structure avec HTML/CSS.",
    github: "https://github.com/Hyzeuline/machine-a-menu",
    URL: "https://machine-a-menu.vercel.app/",
  },
  {
    name: "Une école en Php & MySQL",
    description:
      "Simulation de l'ensemble des données d'un établissement scolaire représentant son organisation globale via une base de données MySQL et une interface Php.",
    github: "https://github.com/Hyzeuline/php",
  },
];

export function Projects() {
  return (
    <div className="Project">
      <h2>Mes projets</h2>
      <p>
        {projets.map((projet) => {
          return (
            <div>
              <h2>{projet.name}</h2>
              <p>{projet.description}</p>
              {projet.URL !== undefined && (
                <a href={projet.URL} target="_blank">
                  Voir la démo
                </a>
              )}
              <a href={projet.github} target="_blank">
                Ouvrir dans Github
              </a>
            </div>
          );
        })}
      </p>
    </div>
  );
}
