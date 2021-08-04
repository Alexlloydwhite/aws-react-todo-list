import { useState } from 'react';

export default function AddTodo() {

    const [inputValue, setInputValue] = useState('');

    const submitTodo = (e: any) => {
        e.preventDefault();
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