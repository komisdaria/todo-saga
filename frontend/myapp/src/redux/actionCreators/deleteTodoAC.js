import { DELETE_TODO, DELETE_TODO_SAGA } from "../types/typesTodo";

export const deleteTodoAC = (id) => ({
      type: DELETE_TODO,
      payload: {
        id,
      }
});

export const deleteTodoSagaAC = (id) => ({
  type: DELETE_TODO_SAGA,
  payload: {
    id,
  },
});
