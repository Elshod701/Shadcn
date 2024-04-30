"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import TaskList from "@/components/task-list";
const IndexPage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header />
      <input
        type="text"
        placeholder="Add a task..."
        onKeyDown={(e) => e.key === "Enter" && addTask(e.target.value)}
      />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </div>
  );
};

export default IndexPage;
