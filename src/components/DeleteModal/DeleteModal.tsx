import React from 'react';
import './DeleteModal.css';
import { IModalState } from '../TodoTable/TodoRow';
import { TodoList } from '../TodoTable/TodoTable';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../redux/action-types/index';

interface IProps {
    todo: TodoList
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<IModalState["modalState"]>>
}

const DeleteModal: React.FC<IProps> = ({ todo, setOpenDeleteModal }) => {
    const dispatch = useDispatch();
    
    const deleteTask = (id: string) => {
        setOpenDeleteModal(false);
        dispatch({
            type: ActionType.deleteTask,
            id: id
        });
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Delete task?</h3>
                <h5>Once this task is deleted, you will be unable to retrieve it</h5>
                <div className="btn-group">
                    <button
                        className="btn cancel"
                        onClick={() => setOpenDeleteModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn delete"
                        onClick={() => deleteTask(todo.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;