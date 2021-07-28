import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/_rootReducer';

export default function App() {
  const dispatch = useDispatch();

  const todoList: string[] = useSelector((state: RootState) => {
    return state.todos
  });

  console.log(todoList);

  useEffect(() => {
    dispatch({
      type: 'FETCH_TODOS'
    });
  }, []);

  return (
    <div className="App">
      {todoList.map((todo: any) => (
        <h4 key={todo.id}>
          {todo.todo}
        </h4>
      ))}
    </div>
  );
}
