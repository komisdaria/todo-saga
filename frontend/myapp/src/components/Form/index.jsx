import React,  { useState }  from "react";
import { useDispatch } from 'react-redux';
import { addTodoAC } from '../../redux/actionCreators/addTodoAC';

function Form() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  
  const addTodo = async (e) => {
    e.preventDefault();

    const action = addTodoAC(input);
    dispatch(action) 
    console.log('action from form', action);
    setInput('');
  };
  
  

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={inputHandler}
          placeholder="Введи задачу"
        />
        <button className='btn purple darken-2'>Добавить</button>
      </form>
      {/* <pre >{JSON.stringify(input)}</pre> */}
    </>
  );
}

export default Form;
