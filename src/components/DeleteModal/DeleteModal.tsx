import React from 'react';
import './DeleteModal.css';
import { IModalState } from '../TodoTable/TodoRow';
import { TodoList } from '../TodoTable/TodoTable';

interface IProps {
    todo: TodoList
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<IModalState["modalState"]>>
}

const DeleteModal: React.FC<IProps> = ({ todo, setOpenDeleteModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Delete task?</h3>
                <h5>Once this task is deleted, you will be unable to retrieve it</h5>
                <h5>{todo.id}</h5>
                <div className="btn-group">
                    <button
                        className="btn cancel"
                        onClick={() => setOpenDeleteModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn delete"
                        onClick={() => setOpenDeleteModal(false)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;