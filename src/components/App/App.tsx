import "./App.css";
import TodoTable from "../TodoTable/TodoTable";
import AddTodo from "../AddTodo/AddTodo";

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <TodoTable />
    </div>
  );
}

export default App;