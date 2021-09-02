import './App.css';
import Main from './components/Main';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { downloadTodosAC } from './redux/actionCreators/dowloadTodosAC'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const start = async () => {
      const response = await fetch('http://localhost:8080/api/todos');
      const result = await response.json();
      // console.log('RESULT ->', result);
      const action = downloadTodosAC(result.todos);
      dispatch(action);
    } 
    start(); 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
         <Main />
      </header>
    </div>
  );
}

export default App;
