import {
  call,
  put,
  takeEvery,
  select,
  debounce,
  throttle,
} from "redux-saga/effects";

import {downloadTodosAC} from '../actionCreators/dowloadTodosAC'
import {downloadTodosFetch} from '../api/downloadTodosFetch'
import {DOWNLOAD_TODOS_SAGA, DELETE_TODO_SAGA} from '../types/typesTodo'
import {deleteTodoAC} from '../actionCreators/deleteTodoAC';
import {deleteTodoFetch} from  '../api/deleteTodosFetch';


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
}
