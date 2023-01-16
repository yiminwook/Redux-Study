import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

function reducer(state={number: 1}, action) {
  const newState = {...state}
  switch(action.type) {
    case "INCREMENT":
      newState.number++;
      return newState;
  default:
    return newState;
  } 
}

const store = createStore(reducer);

export default function App() {

  return (
    <Provider store={store}>
      <div id="container">
        <h1>Root</h1>
        <div id='grid'>
          <Left1></Left1> 
          <Right1></Right1>
        </div>
      </div>
    </Provider>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1:</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2:</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1:</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2:</h1>
      <Right3></Right3>
    </div>
  );
}

function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3:</h1>
      <input 
        type="button" 
        value="+"
        onClick={() => dispatch({type:"INCREMENT"})}
      ></input>
    </div>
  );
}