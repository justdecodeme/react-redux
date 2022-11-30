import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import './Counter.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className="row">
        <button className="button" onClick={() => dispatch(increment())}> + </button>
        <span className="value">{count}</span>
        <button className="button" onClick={() => dispatch(decrement())}> - </button>
      </div>
      <div className="row">
        <input className="textbox" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
        <button className="button" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
      </div>
    </div>
  );
}
