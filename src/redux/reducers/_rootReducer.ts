import { combineReducers } from "redux";
import listOfTodos from "./listOfTodos.reducer";

const rootReducer = combineReducers({
  todos: listOfTodos 
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;