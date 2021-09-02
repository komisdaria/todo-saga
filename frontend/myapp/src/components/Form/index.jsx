import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTodoAC } from '../../redux/actionCreators/addTodoAC';

function Form() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  
  const addTodo = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/api/todos', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: input,
      }),
    });

    const { todoMy } = await response.json();
    const action = addTodoAC({ ...todoMy, id: todoMy._id });
    // Создание туду через action, но всё ли так?
    // const action = addTodoAC({text: input, id: nanoid(), status: false})
    // Создание "модели" тудушки происходит именно здесь после поля payload!
    // input.length > 0 ? dispatch({ type: ADD_TODO, payload: {text: input, id: nanoid(), status: false} }) 
    dispatch(action) 
    console.log('action from form', action);
    setInput("");
  };
  
  

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={inputHandler}
          placeholder="Введи задачу"
        />
        <button type="submit">Нажми меня</button>
      </form>
      {/* <pre >{JSON.stringify(input)}</pre> */}
    </>
  );
}

export default Form;
