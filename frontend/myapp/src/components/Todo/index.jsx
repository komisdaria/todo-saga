import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoSagaAC } from "../../redux/actionCreators/deleteTodoAC";
import { editTodoAC } from '../../redux/actionCreators/editTodoAC'
import { setStatusTodoAC } from '../../redux/actionCreators/setStatusTodoAC';
import css from './index.module.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  // console.log("todo from todo", todo);
  
  const [ edit, setEdit ] = useState(true);
  const [ inputEdit, setInputEdit ] = useState(todo.text);
  
  // console.log('inputEdit--------', inputEdit);
  
  const deleteTodo = () => {
      const action = deleteTodoSagaAC(todo.id);
      dispatch(action);
  };
  
  const changeStatus = async () => {
    dispatch(setStatusTodoAC(todo.id));
  };
  
  const editHandler = async (e) => {
      e.preventDefault();
      setEdit(true)
      console.log('-------->>> id edit', e.target.id);
      // const action = editTodoAC({ inputEdit, id: e.target.id });
      // dispatch(action);
      // console.log("ACTION", action);
      if (inputEdit.trim()) {
        dispatch(editTodoAC(todo.id, inputEdit))
      }
     };


  // const editUseEdit = () => {
  //   edit? setEdit(false) : setEdit(true);
  // }

  // console.log('todo.text from list', todo.text, todo);

  return (
    <>
      <li key={todo.id}>
    
        {edit ? (
          
        <span className={ todo.status ? css.done : ''}> {todo.text} </span>) : 
        <input value={inputEdit} onChange={(e) => setInputEdit(e.target.value)} />}
        <button className='btn  brown lighten-2' onClick={() => changeStatus(todo.id)}>
          { todo.status ? "Не сделал" :  "Сделал"  }
        </button>
        {
        edit ? (
          <button className='btn  light-blue darken-3' id={todo.id} onClick={() => setEdit(false)} >Редактировать</button>
        ) : ( <button className='btn yellow darken-2' id={todo.id} onClick={editHandler} >Сохранить</button>)
        }
        <button className='btn red accent-2' onClick={() => deleteTodo(todo.id)}>Удалить</button>
      </li>
    </>
  );
};

export default Todo;
