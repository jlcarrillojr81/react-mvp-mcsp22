import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Todos from './components/Todos';
import MenuBar from './components/MenuBar';
import TodaysDate from './components/TodaysDate'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch('https://react-mvp-api.onrender.com/todos');
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRefresh = async () => {
    try {
      const res = await fetch('https://react-mvp-api.onrender.com/todos');
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (todos.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      {/* <Loading /> */}
      <MenuBar handleRefresh={handleRefresh} />
      <TodaysDate />
      <Todos todos={todos} handleRefresh={handleRefresh} />
    </div>
  );
}

export default App;
