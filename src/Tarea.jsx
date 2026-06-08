function Tarea({ tarea, alternarTarea, eliminarTarea }) {
    return (
      <li>
        <span
          onClick={() => alternarTarea(tarea.id)}
          className={tarea.hecha ? "hecha" : ""}
        >
          {tarea.titulo}
        </span>
        <button onClick={() => eliminarTarea(tarea.id)}>X</button>
      </li>
    );
  }
  
  export default Tarea;
