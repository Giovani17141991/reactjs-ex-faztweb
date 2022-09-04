import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({ title, description });
    setTitle("");
    setDescrption("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escrive la desc de la tarea"
        onChange={(e) => setDescrption(e.target.value)}
        value={description}
      ></textarea>
      <button>Guardar tarea</button>
    </form>
  );
}

export default TaskForm;
