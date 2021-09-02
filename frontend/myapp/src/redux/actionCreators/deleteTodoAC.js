import { DELETE_TODO } from "../types/typesTodo";

export const deleteTodoAC = (id) => async (dispatch) => {
  const response = await fetch(
    `http://localhost:8080/api/todos/${id}`,
    {
      method: "DELETE",
    }
  );
  const { removed } = await response.json();
  if (removed) {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      }
    })
  }
};
