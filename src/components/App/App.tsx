import './App.css';
import TodoTable from '../TodoTable/TodoTable';
import AddTodo from '../AddTodo/AddTodo';

export default function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoTable />
    </div>
  );
}