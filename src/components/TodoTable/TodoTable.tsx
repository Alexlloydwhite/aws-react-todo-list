import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/_rootReducer';
import './TodoTable.css';

export default function TodoTable() {
    const dispatch = useDispatch();

    const todoList: string[] = useSelector((state: RootState) => {
        return state.todos;
    });

    useEffect(() => {
        dispatch({
            type: 'FETCH_TODOS'
        });
    }, [dispatch]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Created</th>
                        <th>Completed?</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((todo: any) => (
                        <tr key={todo.id}>
                            <td>{todo.todo}</td>
                            <td>{todo.createdAt}</td>
                            <td><button>Complete</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}