import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddTodo.css';

export default function AddTodo() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const submitTodo = (e: any): void => {
        e.preventDefault();
        if (inputValue) {
            dispatch({
                type: 'ADD_TODO',
                payload: inputValue
            });
            setInputValue('');
            setError(false);
        } 
        if (!inputValue) {
            setError(true);
        }
    }

    return (
        <form onSubmit={submitTodo} className="todoform">
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task"
            />
            <button className="default" type="submit">ADD</button>
            {error && <h4>Cannot add an empty task</h4>}
        </form>
    );
}