import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/_rootReducer';

export default function TodoTable() {
    const dispatch = useDispatch();

    const todoList: string[] = useSelector((state: RootState) => {
        return state.todos;
    });

    useEffect(() => {
        dispatch({
            type: 'FETCH_TODOS'
        });
    }, [dispatch]);

    return (
        <div>
            {todoList.map((todo: any) => (
                <h4 key={todo.id}>
                    {todo.todo}
                </h4>
            ))}
        </div>
    );
}