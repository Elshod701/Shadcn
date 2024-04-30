import React from "react";
import TaskItem from "../task-item";

type TaskListProps = {
  tasks: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={() => onComplete(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
