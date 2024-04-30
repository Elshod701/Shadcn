import React from "react";

type TaskItemProps = {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onComplete: () => void;
  onDelete: () => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete, onDelete }) => {
  return (
    <li className="bg-red-500">
      <input type="checkbox" checked={task.completed} onChange={onComplete} />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
