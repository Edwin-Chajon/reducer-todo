import React from 'react';
import './App.css';
import { useReducer } from 'react';
import { initialState, reducer } from './components/reducer';
import {TodoForm} from './components/TodoForm';
import {TodoList} from './components/TodoLits';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const addTodo = (input) => {
    const newTodo = {
      todo:input,
      completed: false,
      id: Date.now()
    }
    dispatch({type: 'ADD_TODO', banana: newTodo})
   }

   const toggleItem = (id) => {
     dispatch({type:'COMPLETED_TODO', banana:id})
   }

   const clearCompleted = () => {
     dispatch({type:'CLEAR_COMPLETED_TODO'})
   }

  return (
    
    <div className="App">
      <TodoList state={state} toggleItem={toggleItem}/>
      <TodoForm addTodo={addTodo}/>
      <button onClick={(e)=>{e.preventDefault()
        clearCompleted()}}>Clear Completed</button>
    </div>
  );
}

export default App;
