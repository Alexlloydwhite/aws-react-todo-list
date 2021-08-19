// React
import { useState } from "react";
// CSS
import "./AddTodo.css";
// Redux
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

export default function AddTodo() {
  const dispatch = useDispatch();
  const { addTodo } = bindActionCreators(actionCreators, dispatch);

  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
      setError(false);
    }
    if (!inputValue) {
      setError(true);
    }
  };

  return (
    <div className="todo-form-wrapper">
      <form onSubmit={(e) => submitTodo(e)} className="todo-form">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          data-testid="add-task-input"
        />
        <button
          className="add-btn default"
          type="submit"
          data-testid="add-task-btn"
        >
          Add
        </button>
        {error && <h4>Cannot add an empty task</h4>}
      </form>
    </div>
  );
}
