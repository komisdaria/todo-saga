import { DOWNLOAD_TODOS, DOWNLOAD_TODOS_SAGA } from "../types/typesTodo";

export const downloadTodosAC = (todos) => ({
    type: DOWNLOAD_TODOS,
    payload: {
      todos,
    }
})

export const downloadTodosSagaAC = () => ({
  type: DOWNLOAD_TODOS_SAGA,
})
