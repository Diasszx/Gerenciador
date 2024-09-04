import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1 className="text-red-500 text-3xl">Gerenciador de Tarefas</h1>
      <Tasks />
      <AddTask />
    </div>
  );
}
export default App;
