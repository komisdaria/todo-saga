import { DOWNLOAD_TODOS } from "../types/typesTodo";

export const downloadTodosAC = (todos) => ({
  type: DOWNLOAD_TODOS,
  payload: {
    todos,
  }
})
