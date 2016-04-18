import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Clock from './components/Clock'
import clock from './reducers/clock'

const store = createStore(clock)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Clock
      value={store.getState()}
      onStart={() => store.dispatch({ type: 'START' })}
      onStop={() => store.dispatch({ type: 'STOP' })}
      onReset={() => store.dispatch({ type: 'RESET' })}
    />,
    rootEl
  )
}

render()
store.subscribe(render)
