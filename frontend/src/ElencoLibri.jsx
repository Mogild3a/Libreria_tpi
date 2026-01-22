export default function ElencoLibri({ libri, deleteLibro }) {
  if (libri.length === 0) return <p>Nessun libro</p>;

  return (
    <ul>
      {libri.map(l => (
        <li key={l.id}>
          {l.titolo} - {l.autore} ({l.anno}) [{l.genere}]
          <button onClick={() => deleteLibro(l.id)}>Elimina</button>
        </li>
      ))}
    </ul>
  );
}