import React from 'react';
import './DeleteModal.css';
import { IModalState as Props } from '../TodoTable/TodoTable';

interface IProps {
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<Props["modalState"]>>
}

const DeleteModal: React.FC<IProps> = ({ setOpenDeleteModal }) => {
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