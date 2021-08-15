import { combineReducers } from "redux";
import listOfTodos from "./listOfTodos.reducer";
import loadingReducer from "./loading.reducer";

const rootReducer = combineReducers({
  todos: listOfTodos,
  loading: loadingReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;