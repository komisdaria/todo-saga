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
import {DOWNLOAD_TODOS_SAGA} from '../types/typesTodo'

function* downloadTodosWorker(){
  try {
    const todos = yield call(downloadTodosFetch)
    yield put(downloadTodosAC(todos))
  } catch (error) {
    yield put({ type: "USER_FETCH_FAILED", message: error.message });
  }
}

export function* todoWatcher() {
  yield takeEvery(DOWNLOAD_TODOS_SAGA,downloadTodosWorker )
}
