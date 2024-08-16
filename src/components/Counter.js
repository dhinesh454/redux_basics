import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showToodler)
  
  const incrementHandler = () => {
    dispatch({type:'increment'})
  };


  const decrementHandler = () => {
    dispatch({type:'decrement'})
  }; 


  const incrementHandlerfive = () => {
    dispatch({type:'incresesby5',amount:5})
  }
  
  
  
  const toggleCounterHandler = () => {
    dispatch({type:'toodler'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandlerfive}>Increment+5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
