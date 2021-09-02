import { SET_STATUS_TODO } from "../types/typesTodo"

export const setStatusTodoAC = (id) => async (dispatch, getState) => {
  const state = getState();
  const currentTodo = state.todos.find((todo) => todo.id === id);
  const response = await fetch(
    `http://localhost:8080/api/todos/status/${id}`,
    {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: !currentTodo.status,
      }),
    }
  )
  const { todo: { _id, ...rest}, } = await response.json();
  dispatch({
    type: SET_STATUS_TODO,
    payload: { todo: { id: _id, ...rest }}
  })
};
