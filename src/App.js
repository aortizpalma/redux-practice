import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increment_x, decrement_x } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Redux practice</h1>

      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increment_x(5))}>+ 5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(decrement_x(5))}>- 5</button>

      {isLogged ? <h3>Valuable information I shouldn't see if I'm not logged in.</h3> : ''}
      
    </div>
  );
}

export default App;
