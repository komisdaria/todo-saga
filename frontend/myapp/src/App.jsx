import './App.css';
import Main from './components/Main';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { downloadTodosAC } from './redux/actionCreators/dowloadTodosAC'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(downloadTodosAC())
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
