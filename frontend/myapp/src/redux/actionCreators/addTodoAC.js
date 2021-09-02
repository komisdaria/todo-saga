// 3 Писать после типов

import { ADD_TODO } from "../types/typesTodo";

export const addTodoAC = (todo) => ({
  type: ADD_TODO,
  payload: todo,
  // payload: {
  //   text,
  //   id,
  //   status,
  // }
});
