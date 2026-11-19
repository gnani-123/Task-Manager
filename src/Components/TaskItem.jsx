import { useState } from "react";

export default function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const save = () => {
    if (newText.trim() === "") return;
    editTask(task.id, newText.trim());
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {isEditing ? (
        <input
          className="edit-input"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className={task.completed ? "done" : ""}>{task.text}</span>
      )}

      {isEditing ? (
        <button onClick={save}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button className="delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}