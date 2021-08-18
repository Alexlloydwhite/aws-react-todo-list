// React
import { useEffect } from "react";
// Types & Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/_rootReducer";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
// Local Imports
import "./TodoTable.css";
import TodoRow from "./TodoRow";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export interface TodoList {
  completed: boolean;
  createdAt: string;
  todo: string;
  id: string;
}

export default function TodoTable() {
  const dispatch = useDispatch();
  const { getTodos } = bindActionCreators(actionCreators, dispatch);

  const loading = useSelector((state: RootState) => {
    return state.loading;
  });

  useEffect(() => {
    getTodos();
    // Compiler throws error asking to add
    // getTodos to deps array, doing so
    // causes render loop.
    // So.....
    // eslint-disable-next-line
  }, []);

  const todoList: TodoList[] = useSelector((state: RootState) => {
    return state.todos;
  });

  const sortList = (a: any, b: any): number => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    return dateA > dateB ? 1 : -1;
  };

  const sortedTodoList = todoList.sort(sortList);

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div>
        {sortedTodoList && (
          <table cellSpacing="0" className="todo-table-wrapper">
            <thead>
              <tr className="todo-table-header">
                <th colSpan={4}>
                  <h2>To-do List</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedTodoList.map((todo: TodoList) => (
                <TodoRow todo={todo} key={todo.id} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
