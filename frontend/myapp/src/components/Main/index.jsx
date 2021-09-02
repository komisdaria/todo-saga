import React from 'react'
import Form from '../Form'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodoAC } from '../../redux/actionCreators/addTodoAC';
import { todoInitialState } from '../../redux/initial/todoState';
import TodoList from '../TodoList';

const Main = () => {  // sfc
  // const dispatch = useDispatch();

  // const [todos, setTodos] = useState([])

  // const addHandler = (text) => {
  //   setTodos(pre => [...pre, {
  //     text,
  //     completed: false,
  //     id: Date.now(),
  //   }])
  // }

  // console.log('todos----', {todos});

  return (
    <>
      <Form  />
      <TodoList />
    </>
  );
}
 
export default Main;
