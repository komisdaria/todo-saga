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
} from "../types/typesTodo.js"
import { addTodoAC } from "../actionCreators/addTodoAC";
import { addTodoFetch } from '../api/addTodoFetch';
import {downloadTodosAC} from '../actionCreators/dowloadTodosAC'
import {downloadTodosFetch} from '../api/downloadTodosFetch'
import {deleteTodoAC} from '../actionCreators/deleteTodoAC';
import {deleteTodoFetch} from  '../api/deleteTodosFetch';

function* addTodoWorker(action) {
  try {
    console.log(111);
    const todoSaga = yield call(addTodoFetch, action.payload.text);
    console.log(222);
    console.log('Вызов воркера addTodoWorker', todoSaga);
    yield put(addTodoAC(todoSaga))
    console.log(333);
  } catch (error) {
    yield put({ type: 'ОШИБКА ИЗ addTodoWorker', message: error.message});
  }
}

function* downloadTodosWorker(){
  try {
    const todos = yield call(downloadTodosFetch)
    yield put(downloadTodosAC(todos))
  } catch (error) {
    yield put({ type: "USER_FETCH_FAILED", message: error.message });
  }
};

function* deleteTodosWorker(action) {
  try {
    const removed = yield call(deleteTodoFetch, action.payload.id);
    if (removed) {
      yield put(deleteTodoAC(action.payload.id));
    }
  } catch (error) {
    yield put({ type: "DELETE_FETCH_FAILED", message: error.message });
  }
}

export function* todoWatcher() {
  yield takeEvery(DOWNLOAD_TODOS_SAGA,downloadTodosWorker )
  yield takeEvery(DELETE_TODO_SAGA, deleteTodosWorker)
  yield takeEvery(ADD_TODO_SAGA, addTodoWorker);
}
