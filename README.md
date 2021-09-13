# Redux practice

Some practice from this [DevEd tutorial](https://www.youtube.com/watch?v=CVpUuw9XSjY&t=1740s)

## Technologies used

Built with:

- HTML
- JS
- CSS
- React
- Redux

## Setup and usage

Live page [here](https://)

## Screenshot

## Sources

## Authors and acknowledgment

Alfonso Ortiz Palma Junco

- GitHub @aortizpalma
- [LinkedIn](https://www.linkedin.com/in/ortizpalma/)

---

# Tutorial notes

Part 1 exercise code and notes, in index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

//STORE -> GLOBALIZED STATE

// The store is an object with a few methods on it:
// - getState(): Returns the current state tree of your application.
// - dispatch(action): Dispatches an action. This is the only way to trigger a state change. The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state. It will be returned from getState() from now on, and the change listeners will immediately be notified.
// - subscribe(listener): Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed.
// - replaceReducer(nextReducer): Replaces the reducer currently used by the store to calculate the state.

//ACTION ->  It describes what you want to do (E.G. INCREMENT COUNTER).
// It is a simple function that returns an object
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// REDUCER -> Describe how the actions transform the state into the new state. Checks which action was selected and will modify how the store appears.
// It is also a function that returns an object.
// It contains two parameters: the initial state and an action
// It often makes use of switch statements to act depending on the action's name
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// we create the store and pass it the reducer fuction
let store = createStore(counter);

// Display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH -> Here we can execute the selected action to dispatch it to the reducer.
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
