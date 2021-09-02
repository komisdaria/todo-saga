import { EDIT_TODO } from "../types/typesTodo";

export const editTodoAC = (todo) => ({
  type: EDIT_TODO,
  payload: {
    todo,
  },
});
