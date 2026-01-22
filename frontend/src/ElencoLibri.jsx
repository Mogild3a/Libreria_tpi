export default function ElencoLibri({ libri, deleteLibro }) {
  if (libri.length === 0) return <p>Nessun libro in archivio.</p>;

  return (
    <ul className="lista_libri">
      {libri.map(l => (
        <li key={l.id} className="item_libro">
          <div>
            <span className="titolo_libro">{l.titolo}</span>
            <span className="info_libro">{l.autore} ({l.anno}) — {l.genere}</span>
          </div>
          <button className="btndelete" onClick={() => deleteLibro(l.id)}>
            Elimina
          </button>
        </li>
      ))}
    </ul>
  );
}