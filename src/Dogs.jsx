export function Dogs({ name, race, age }) {
  const chiens = [
    { name: "orson", race: "golden", age: 2, id: 0 },
    { name: "orko", race: "berger australien", age: 4, id: 1 },
    { name: "lila", race: "caniche", age: 6, id: 2 },
  ];

  return (
    <div>
      <h1>Liste des chiens</h1>
      <p>
        {chiens.map((chien) => {
          return (
            <div key={chien.id}>
              <h2>{chien.name}</h2>
              <p>{chien.race}</p>
              <p>{chien.age}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
}
