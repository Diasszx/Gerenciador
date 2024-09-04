import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programacao",
      description:
        "Estudar programação para se tornar um desenovlver full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar ingles",
      description: "Estudar inglês para se tornar bilingue",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler um livro",
      description: "Ler clean code",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      // Preciso atualizar tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR
      return task;
    });
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id != taskId);
    setTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        <AddTask />
      </div>
    </div>
  );
}
export default App;
