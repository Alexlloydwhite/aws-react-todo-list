import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/_rootReducer';
import { ActionType } from '../../redux/action-types/index';
import './TodoTable.css';
import moment from 'moment';

import DeleteModal from '../DeleteModal/DeleteModal';

interface TodoList {
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

    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const deleteTask = (id: string) => {
        setOpenDeleteModal(true);
        // dispatch({
        //     type: ActionType.deleteTask,
        //     id: id
        // });
    }

    return (
        <div style={{ overflowX: 'auto' }}>
            {sortedTodoList &&
                <table className="center">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Created</th>
                            <th>Completed?</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTodoList.map((todo: TodoList) => (
                            <tr key={todo.id}>
                                <td>{todo.todo}</td>
                                <td>
                                    {moment(todo.createdAt).format('MMMM Do YYYY, h:mm a')}
                                </td>
                                <td><button className="complete">Complete</button></td>
                                <td>
                                    <button
                                        className="delete"
                                        onClick={() => deleteTask(todo.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            {openDeleteModal &&
                <DeleteModal
                    openDeleteModal={openDeleteModal}
                    setOpenDeleteModal={setOpenDeleteModal}
                />
            }
        </div>
    );
}