// React
import { useState } from 'react';
import moment from 'moment';
// Local Imports
import DeleteModal from '../Modals/DeleteModal';
import EditModal from '../Modals/EditModal';
// Types & Redux
import { TodoList as Props } from '../TodoTable/TodoTable';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';

export interface IModalState {
    modalState: boolean
}

interface IProps {
    todo: Props
}

const TodoRow: React.FC<IProps> = ({ todo }) => {

    const [openDeleteModal, setOpenDeleteModal] = useState<IModalState["modalState"]>(false);
    const [openEditModal, setOpenEditModal] = useState<IModalState["modalState"]>(false);

    const dispatch = useDispatch();
    const { toggleTodoComplete } = bindActionCreators(actionCreators, dispatch);

    const toggleComplete = (todo: IProps["todo"]) => {
        const toggle = todo.completed ? false : true;
        toggleTodoComplete(todo.id, toggle);
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
                        style={{ marginRight: 5 }}
                        onClick={() => setOpenDeleteModal(true)}
                    >
                        Delete
                    </button>
                    <button
                        className="edit"
                        onClick={() => setOpenEditModal(true)}
                    >
                        Edit
                    </button>
                </td>
            </tr>
            {openDeleteModal &&
                <DeleteModal
                    setOpenDeleteModal={setOpenDeleteModal}
                    todo={todo}
                />
            }
            {openEditModal &&
                <EditModal />
            }
        </>
    )
}

export default TodoRow;