import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import ReduxState from './reduxState';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// ACTION ==> (WHAT I WANNA DO) => giving an object to make the Reducer check the CASE
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// REDUCER ==> runs the CASE from the function
// const counter = (state = 0, action) => {
//     switch(action.type){
//         case "INCREMENT" :
//             return state + 1;
//         case "DECREMENT" :
//             return state - 1;
//     }
// }

// let store = createStore(counter)
// store.subscribe(() => console.log(store.getState()))

// DISPATCH => calling the function 
// store.dispatch(increment());


function Redux() {
  return (
    <div>
        <h2>Redux</h2>
        <Provider store={store}>
            <ReduxState/>
        </Provider>
    </div>
  )
}

export default Redux