import { useState } from "react";

export default function AggiungiLibro({ addLibro }) {
  const [titolo, setTitolo] = useState("");
  const [autore, setAutore] = useState("");
  const [anno, setAnno] = useState("");
  const [genere, setGenere] = useState("");

  return (
    <form onSubmit={AggiungiIlLibro}>
      <input value={titolo} onChange={e => setTitolo(e.target.value)} placeholder="Titolo" required />
      <input value={autore} onChange={e => setAutore(e.target.value)} placeholder="Autore" required />
      <input value={anno} onChange={e => setAnno(e.target.value)} placeholder="Anno" type="number" required />
      <input value={genere} onChange={e => setGenere(e.target.value)} placeholder="Genere" required />
      <button type="submit">Aggiungi</button>
    </form>
  );
}