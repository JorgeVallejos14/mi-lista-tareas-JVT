import { useState } from "react";
import "./App.css";

function App() {
  function App() {
    const [tareas, setTareas] = useState([]);
    const [texto, setTexto] = useState("");

    return (
      <div className="app">
        <h1>Mi lista de tareas</h1>

        <div className="entrada">
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe una tarea"
            />
            <button>Agregar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Mi lista de tareas</h1> 
    </div>
  );
}

export default App;