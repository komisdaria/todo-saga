import { DOWNLOAD_TODOS } from "../types/typesTodo";

export const downloadTodosAC = () => async (dispatch) => {
  const response = await fetch('http://localhost:8080/api/todos');
  const result = await response.json();
  const todos = result.todos;
  console.log('todos AC DOWN',todos);
  dispatch({
    type: DOWNLOAD_TODOS,
    payload: {
      todos,
    }
  })
}
