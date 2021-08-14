// React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Types
import { RootState } from '../../redux/reducers/_rootReducer';
import { ActionType } from '../../redux/action-types/index';
// Local Imports
import './TodoTable.css';
import TodoRow from './TodoRow';

export interface TodoList {
    completed: boolean,
    createdAt: string,
    todo: string,
    id: string
}

export default function TodoTable() {
    const dispatch = useDispatch();

    const todoList: TodoList[] = useSelector((state: RootState) => {
        return state.todos;
    });

    const sortList = (a: any, b: any) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();

        return dateA > dateB ? 1 : -1;
    }

    const sortedTodoList = todoList.sort(sortList);

    useEffect(() => {
        dispatch({
            type: ActionType.getListOfTodos
        });
    }, [dispatch]);


    return (
        <div style={{ overflowX: 'auto' }}>
            {sortedTodoList &&
                <table cellSpacing="0" className="center">
                    <thead>
                        <h2 style={{ marginLeft: '10px' }}>To-do List</h2>
                    </thead>
                    <tbody>
                        {sortedTodoList.map((todo: TodoList) => (
                            <TodoRow todo={todo} key={todo.id} />
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}