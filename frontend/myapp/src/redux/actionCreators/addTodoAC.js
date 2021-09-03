// 3 Писать после типов

import { ADD_TODO, ADD_TODO_SAGA } from "../types/typesTodo";

export const addTodoAC = (todoMy) => ({
    type: ADD_TODO,
    payload: {
      todoMy
    }
});

export const addTodoSagaAC = (text) => ({
  type: ADD_TODO_SAGA,
  payload: {
    text,
  },
});
