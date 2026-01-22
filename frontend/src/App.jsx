import { useState, useEffect } from "react";
import AggiungiLibro from "./AggiungiLibro";
import ElencoLibri from "./ElencoLibri";
import "./App.css";

function App() {
  const [libri, setLibri] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchLibri() {
      const res = await fetch("http://localhost:5000/api/libri");
      const data = await res.json();
      setLibri(data);
    }
    fetchLibri();
  }, []);

  async function addLibro(nuovoLibro) {
  const res = await fetch("http://localhost:5000/api/libri", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuovoLibro),
  });
  const data = await res.json();
  const lista = libri.slice();
  lista.push(data);           
  setLibri(lista);            
}

async function deleteLibro(id) {
  await fetch("http://localhost:5000/api/libri/" + id, { method: "DELETE" });
  const lista = [];
  for (let i = 0; i < libri.length; i++) {
    if (libri[i].id !== id) {
      lista.push(libri[i]);
    }
  }
  setLibri(lista);
}
async function deleteAllLibri() {
  await fetch("http://localhost:5000/api/libri", { method: "DELETE" });
  setLibri([]);
}

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Libreria</h1>

      <input
        type="text"
        placeholder="Cerca"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <AggiungiLibro addLibro={addLibro} />
      <button onClick={deleteAllLibri} style={{ marginTop: "10px" }}>
        Elimina tutti
      </button>
      <ElencoLibri libri={libri} deleteLibro={deleteLibro} />
    </div>
  );
}

export default App;
