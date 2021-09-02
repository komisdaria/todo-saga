import { DELETE_TODO } from "../types/typesTodo";

export const deleteTodoAC = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  }
});
