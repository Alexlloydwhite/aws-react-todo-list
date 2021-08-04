import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AddTodo() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const submitTodo = (e: any): void => {
        e.preventDefault();
        if (inputValue) {
            dispatch({
                type: 'ADD_TODO',
                payload: inputValue
            });
        }
    }

    return (
        <form onSubmit={submitTodo}>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}