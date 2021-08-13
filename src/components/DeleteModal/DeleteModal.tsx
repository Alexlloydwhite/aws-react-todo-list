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
                <span
                    className="close-btn"
                    onClick={() => setOpenDeleteModal(false)}
                >
                    &times;
                </span>
                <p>Modal</p>
            </div>
        </div>
    );
}

export default DeleteModal;