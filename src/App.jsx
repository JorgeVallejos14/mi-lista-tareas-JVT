import { useState, useEffect } from "react";
import "./App.css";
import Tarea from "./Tarea"; // Importa el componente Tarea

function App() {
  const [tareas, setTareas] = useState(() => {
    // Cargar tareas desde localStorage al iniciar
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });
  const [texto, setTexto] = useState("");

  const tareasHechas = tareas.filter((t) => t.hecha).length;
  const tareasPendientes = tareas.length - tareasHechas;

  function agregarTarea() {
    if (texto.trim() === "") return;
    const nueva = {
      id: Date.now(),
      titulo: texto,
      hecha: false,
    };
    setTareas([...tareas, nueva]);
    setTexto("");
  }

  function alternarTarea(id) {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, hecha: !t.hecha } : t
      )
    );
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((t) => t.id !== id));
  }

  function eliminarTodasLasTareas() {
    setTareas([]);
  }

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div className="app">
      <h1>Mi lista de tareas</h1>
  
      <div className="entrada">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              agregarTarea();
            }
          }}
          placeholder="Escribe una tarea"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
  
      {tareas.length > 0 ? (
        <>
          <ul>
            {tareas.map((t) => (
              <Tarea
                key={t.id}
                tarea={t}
                alternarTarea={alternarTarea}
                eliminarTarea={eliminarTarea}
              />
            ))}
          </ul>
          <button onClick={eliminarTodasLasTareas}>Borrar todas las tareas</button>
        </>
      ) : (
        <p>No hay tareas</p>
      )}
  
      <p>{tareasHechas} tarea(s) hecha(s)</p>
      <p>{tareasPendientes} tarea(s) pendiente(s)</p>
    </div>
  );
}

export default App;
