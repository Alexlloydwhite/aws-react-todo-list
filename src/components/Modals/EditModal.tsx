import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';
import { IModalState } from '../TodoTable/TodoRow';
import { TodoList } from '../TodoTable/TodoTable';
import './Modal.css';

interface IProps {
    todo: TodoList
    setOpenEditModal: React.Dispatch<React.SetStateAction<IModalState["modalState"]>>
}

const EditModal: React.FC<IProps> = ({ todo, setOpenEditModal }) => {
    const [editState, setEditState] = useState<TodoList["todo"]>(todo.todo);

    const dispatch = useDispatch();
    const { editTodoTask } = bindActionCreators(actionCreators, dispatch);

    const submitEditTask = (id: string) => {
        setOpenEditModal(false);
        editTodoTask(id, editState);
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Edit Task</h3>
                <input
                    style={{ width: '100%' }}
                    value={editState}
                    onChange={(e) => setEditState(e.target.value)}
                />
                <div className="btn-group">
                    <button
                        className="btn cancel"
                        onClick={() => setOpenEditModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn cancel"
                        onClick={() => submitEditTask(todo.id)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;