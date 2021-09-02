// 3 Писать после типов

import { ADD_TODO } from "../types/typesTodo";

export const addTodoAC = (text) => async(dispatch, getState) => {
  const response = await fetch('http://localhost:8080/api/todos', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text, // text: text
    }),
  });
  const { todoMy }  = await response.json();
  console.log('todoMy',todoMy);

  dispatch({
    type: ADD_TODO,
    payload: {
       ...todoMy, id: todoMy._id
    }
  })
  // console.log(getState());
};
