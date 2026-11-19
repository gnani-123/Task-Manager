import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks here.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}