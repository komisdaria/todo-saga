import './App.css';
import Main from './components/Main';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { downloadTodosSagaAC } from './redux/actionCreators/dowloadTodosAC'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(downloadTodosSagaAC())
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
         <Main />
      </header>
    </div>
  );
}

export default App;
