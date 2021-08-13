import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/_rootReducer';
import { ActionType } from '../../redux/action-types/index';
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
                <table className="center">
                    <thead>
                        <tr>
                            <th>Completed?</th>
                            <th>Task</th>
                            <th>Created</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTodoList.map((todo: TodoList) => (
                            <TodoRow todo={todo} />
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}