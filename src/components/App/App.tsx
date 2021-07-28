import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface TodoState {
  todoList: {
    completed: boolean,
    createdAt: string,
    id: string,
    todo: string
  }[]
}

export default function App() {
  const [listOfTodos, setListOfTodos] = useState<TodoState["todoList"]>([]);
  const [newTodo, setNewTodo] = useState('');

  const getListOfTodos = () => {
    axios.get('https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/todos')
      .then((result) => {
        setListOfTodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getListOfTodos();
  }, []);

  const addTodo = (e: any) => {
    e.preventDefault();

    if (newTodo) {
      axios.post('https://oajwgks9xh.execute-api.us-east-2.amazonaws.com/dev/', { todo: newTodo })
        .then(() => {
          getListOfTodos();
          setNewTodo('');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      {
        listOfTodos ?
          listOfTodos.map((todo) => (
            <h4 key={todo.id}>
              {todo.todo}
            </h4>
          ))
          :
          <h4>Add a todo!</h4>
      }
    </div>
  );
}
