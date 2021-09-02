import { EDIT_TODO } from '../types/typesTodo';

export const editTodoAC = (id, inputEdit) => async (dispatch) => {
  const response = await fetch(`http://localhost:8080/api/todos/${id}/edit`,
  {
    method: "PUT",
    headers: {
       "Content-Type": "application/json",
    },
    body: JSON.stringify({
          inputEdit,
        }),
    }
  );
  const resultEdit = await response.json();
      dispatch({
        type: EDIT_TODO,
        payload: {
          ...resultEdit.todo, id: resultEdit.todo._id
        }
      })
};
