import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './actions'
import { decrement } from './actions'
function ReduxState() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>counter {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        { isLogged ?
            <h3>valuable info i shouldn&apos;t see if im not logged in</h3>
        : ""}
    </div>
  )
}

export default ReduxState