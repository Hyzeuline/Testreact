import "./App.css";
import { Header } from "./header";
import { Apropos } from "./Apropos";
import { Projects } from "./Project";
import { Formation } from "./Formation";
import { Contact } from "./Contact";
import { Dogs } from "./Dogs";

export function App() {
  return (
    <>
      <Header />
      <Apropos
        statut="Etudiante en développement web & mobile à Paris"
        description="Je m'appelle Iseline et j'ai 27 ans. Je suis à la recherche d'un contrat en alternance pour obtenir le diplôme de Concepteur Développeur d'Applications avec l'école Le Réacteur. Passionnée par le code, j'ai décidé de réaliser une reconversion professionnelle."
      />
      <Projects />
      <Formation description="Prochainement, je suivrai la formation Développement Web & Mobile au Reacteur afin de perfectionner mes connaissances et d'apprendre de nouvelles technologies:" />
      <Contact
        mail="iseline.voison@gmail.com"
        github="Iseline Voison"
        linkedin="Iseline voison"
      />
      <Dogs />
    </>
  );
}
