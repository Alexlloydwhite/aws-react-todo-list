import React from 'react';
import './DeleteModal.css';
import { IModalState as Props } from '../TodoTable/TodoTable';

interface IProps {
    openDeleteModal: Props["modalState"]
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<Props["modalState"]>>
}

const DeleteModal: React.FC<IProps> = ({ openDeleteModal, setOpenDeleteModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="container">
                    <h1>Modal Box</h1>
                    <button onClick={() => setOpenDeleteModal(false)}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;