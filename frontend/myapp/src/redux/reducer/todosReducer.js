// 4 пишем после action creators в редьюсере расписываем шаги для каждого события

import {
  ADD_TODO,
  DELETE_TODO, 
  EDIT_TODO, 
  SET_STATUS_TODO, 
  DOWNLOAD_TODOS
} from '../types/typesTodo'
import { todoInitialState } from './../initial/todoState';

export default function todosReducer(state = todoInitialState, { type, payload }) { // сразу деструктурируем action чтобы не повтярять DRY

  console.log(' action => ', { type, payload });
  switch (type) {
    case DOWNLOAD_TODOS:
      return { ...state,
         todos: payload.todos };
    
    case ADD_TODO:
      // return { ...state, todos: [...state.todos, payload] };
      return { ...state, todos: [...state.todos, payload] }

    case DELETE_TODO:
      const todos = state.todos.filter((el) => el.id !== payload.id);
      return {
        ...state,
        todos
      };


    case EDIT_TODO:
      console.log('edit todo payload=====>', payload);

      const editedTodo = state.todos.map((el) => {
        if (el.id === payload.id) {
          return {
            ...el,
            text: payload.text,
          }
        }
        return el
      });
      console.log('editedTodo', editedTodo);
      return {
        ...state,
        todos: editedTodo
      }

    case SET_STATUS_TODO:
      console.log('state 123', state);
      console.log('stapayload', payload);
      const statusTodo = state.todos.map((el) => {
        if (el.id === payload.todo.id) {
          return { ...el, status: !el.status };
        }
        return el;
      });
     return {...state, todos: statusTodo}
    default:
      return state;
  };
};
