import {
  call,
  put,
  takeEvery,
  select,
  debounce,
  throttle,
} from "redux-saga/effects";
import {
  ADD_TODO_SAGA,
  DELETE_TODO_SAGA,
  DOWNLOAD_TODOS_SAGA,
  SET_STATUS_TODO_SAGA,
} from "../types/todo";
import { addTodoAC } from "../actionCreators/addTodoAC";
import { addTodoFetch } from '../api/addTodoFetch';

function* addTodoWorker(action) {
  try {
    const todoSaga = yield call(addTodoFetch, action.payload.text);
    console.log('Вызов воркера addTodoWorker', action, todoSaga);
    yield put(addTodoAC(todoSaga))
  } catch (error) {
    yield put({ type: 'ОШИБКА ИЗ addTodoWorker', message: error.message});
  }
}

export function* todoWatcher() {
  yield takeEvery(ADD_TODO_SAGA, addTodoWorker);
}
