import React from 'react';
import './App.css';
import {useDispatch , useSelector} from 'react-redux'
import {increment} from './toolkitRedux/countSlice'

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.countSlice.count)

  const addAsync = () => {
   return async dispatch => {
      setTimeout(()=>{
        dispatch(increment(3))
      },2000)
    }
  }

  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={()=> dispatch(increment(2))}>+</button>
        <button onClick={()=> dispatch(addAsync())}>add async</button>
    </div>
  );
}

export default App;
