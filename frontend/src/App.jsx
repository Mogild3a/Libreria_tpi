import { useState, useEffect } from "react";
import AggiungiLibro from "./AggiungiLibro";
import ElencoLibri from "./ElencoLibri";
import "./App.css";

function App() {
  const [libri, setLibri] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Libreria</h1>
      <input
        type="text"
        placeholder="Cerca autore o genere"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <AggiungiLibro addLibro={() => {}} />
      <button style={{ marginTop: "10px" }}>Elimina tutti</button>
      <ElencoLibri libri={[]} deleteLibro={() => {}} />
    </div>
  );
}

export default App;