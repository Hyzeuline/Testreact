export function Contact({ mail, github, linkedin }) {
  return (
    <div classname="Contact">
      <h2>Contactez moi</h2>
      <p>
        {mail}
        {github}
        {linkedin}
      </p>
    </div>
  );
}
