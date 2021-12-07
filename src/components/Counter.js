import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter)
  const dispathch = useDispatch();

  const increment = () => {
    dispathch({ type: "increment" });
  };

  const decrement = () => {
    dispathch({ type: "decrement" });
  };
 

  const increaseHandler = () => {
    dispathch({ type: "increase", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispathch({type:'toggle'})
  };
  return (
   
   <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div> }
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={increaseHandler}>increae</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
