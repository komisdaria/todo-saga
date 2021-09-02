import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAC } from "../../redux/actionCreators/deleteTodoAC";
import { editTodoAC } from '../../redux/actionCreators/editTodoAC'
import { setStatusTodoAC } from '../../redux/actionCreators/setStatusTodoAC';
import css from './index.module.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  // console.log("todo from todo", todo);
  
  const [edit, setEdit] = useState(true);
  const [text, setText] = useState(todo.text);
  
  // console.log('text--------', text);

  const deleteTodo = async() => {
    const response = await fetch(
      `http://localhost:8080/api/todos/${todo.id}`,
      {
        method: "DELETE",
      }
    );
    const { removed } = await response.json();
    if (removed) {
      const action = deleteTodoAC(todo.id);
      dispatch(action);
    }
  };
  
  const changeStatus = async () => {
    // dispatch({ type: SET_STATUS_TODO, payload: { id } });
    const response = await fetch(
      `http://localhost:8080/api/todos/status/${todo.id}`,
      {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: !todo.status,
        }),
      }
    )
    const result = await response.json();
    const action = setStatusTodoAC({ ...result.todo, id: result.todo._id});
    console.log('result from Todo', action);
    dispatch(action);
  };
  
  const editHandler = (e) => {
      setEdit(true)
      console.log('-------->>>', e.target.id);
      const action = editTodoAC({ text, id: e.target.id });
      dispatch(action);
      console.log("ACTION", action);
     };


  // const editUseEdit = () => {
  //   edit? setEdit(false) : setEdit(true);
  // }

  console.log('EDIIIIT', edit);

  return (
    <>
      <li key={todo.id}>
    
        {edit ? (
          
        <span className={ todo.status ? css.done : ''}>{todo.id} {todo.text} </span>) : 
        <input value={text} onChange={(e) => setText(e.target.value)} />}
        <button onClick={() => changeStatus(todo.id)}>
          { todo.status ? "Не сделал" :  "Сделал"  }
        </button>
        {
        edit ? (
          <button id={todo.id} onClick={() => setEdit(false)} >Редактировать</button>
        ) : ( <button id={todo.id} onClick={editHandler} >Сохранить</button>)
        }
        <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
      </li>
    </>
  );
};

export default Todo;
