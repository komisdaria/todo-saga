import { SET_STATUS_TODO } from "../types/typesTodo"

export const setStatusTodoAC = (todo) => ({
  type: SET_STATUS_TODO,
  payload: { todo }
});
