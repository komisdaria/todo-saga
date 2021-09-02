import React from 'react';
import {useSelector} from 'react-redux';
import Todo from '../Todo';

export default function TodoList() {
  const todos = useSelector(state => state.todos)

  // console.log('todos from todoList---->>>', todos);
  // console.log('todos from todoList---->>>', payload.todos);

  return (
    <div>
      <ol>
      {todos ?
      todos.map((todo, index) => (  
        <Todo key={todo.id} todo={todo} />
        )) : <h1>Нет туду</h1>
      }
      </ol>
    </div>)
  }


