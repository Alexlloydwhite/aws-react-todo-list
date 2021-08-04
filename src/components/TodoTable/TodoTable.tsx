import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/_rootReducer';
import { ActionType } from '../../redux/action-types/index';
import './TodoTable.css';

export default function TodoTable() {
    const dispatch = useDispatch();

    const todoList: string[] = useSelector((state: RootState) => {
        return state.todos;
    });

    useEffect(() => {
        dispatch({
            type: ActionType.getListOfTodos
        });
    }, [dispatch]);

    const deleteTask = (id: string) => {
        console.log(id);
    }

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
                            <td><button onClick={() => deleteTask(todo.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}