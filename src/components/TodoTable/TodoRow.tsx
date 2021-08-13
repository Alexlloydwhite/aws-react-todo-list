// React
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
// Local Imports
import DeleteModal from '../DeleteModal/DeleteModal';
// Types
import { TodoList as Props } from '../TodoTable/TodoTable';
import { ActionType } from '../../redux/action-types';

export interface IModalState {
    modalState: boolean
}

interface IProps {
    todo: Props
}

const TodoRow: React.FC<IProps> = ({ todo }) => {

    const [openDeleteModal, setOpenDeleteModal] = useState<IModalState["modalState"]>(false);

    const dispatch = useDispatch();

    const toggleComplete = (todo: IProps["todo"]) => {
        // Backwards ternary ;P
        const toggle = todo.completed ? false : true;
        dispatch({
            type: ActionType.toggleComplete,
            id: todo.id,
            payload: toggle
        });
    }

    return (
        <>
            <tr>
                {todo.completed ?
                    <td>
                        <input
                            className="input-checkbox"
                            type="checkbox"
                            onClick={() => toggleComplete(todo)}
                            defaultChecked
                        />
                    </td>
                    : <td>
                        <input
                            className="input-checkbox"
                            type="checkbox"
                            onClick={() => toggleComplete(todo)}
                        />
                    </td>
                }
                <td>{todo.todo}</td>
                <td>{moment(todo.createdAt).format('MMMM Do YYYY, h:mm a')}</td>
                <td>
                    <button
                        className="delete"
                        onClick={() => setOpenDeleteModal(true)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
            {openDeleteModal &&
                <DeleteModal
                    setOpenDeleteModal={setOpenDeleteModal}
                    todo={todo}
                />
            }
        </>
    )
}

export default TodoRow;