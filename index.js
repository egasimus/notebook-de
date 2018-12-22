import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import App from './components/App'
import reducer from './reducers'
import './styles'

document.body.innerHTML = '<div id="Root">Initializing...</div>'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)))

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('Root'))

requestAnimationFrame(tick)
function tick () {
	store.dispatch({ type: 'Tick', now: + new Date() })
	requestAnimationFrame(tick)
}
