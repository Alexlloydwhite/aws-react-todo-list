import { useState } from 'react';
import moment from 'moment';
import DeleteModal from '../DeleteModal/DeleteModal';
import { TodoList as Props } from '../TodoTable/TodoTable';

export interface IModalState {
    modalState: boolean
}

interface IProps {
    todo: Props
}

const TodoRow: React.FC<IProps> = ({ todo }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState<IModalState["modalState"]>(false);

    return (
        <>
            <tr key={todo.id}>
                <td>{todo.todo}</td>
                <td>
                    {moment(todo.createdAt).format('MMMM Do YYYY, h:mm a')}
                </td>
                <td><button className="complete">Complete</button></td>
                <td>
                    <button
                        className="delete"
                        onClick={() => setOpenDeleteModal(true)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
            {
                openDeleteModal &&
                <DeleteModal
                    setOpenDeleteModal={setOpenDeleteModal}
                    todo={todo}
                />
            }
        </>
    )
}

export default TodoRow;