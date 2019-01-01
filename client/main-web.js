import './styles'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

import init from './api/init'
init()

document.body.innerHTML = '<div id="Root">Initializing...</div>'

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('Root'))

requestAnimationFrame(tick)
function tick () {
	store.dispatch({ type: 'Tick', now: + new Date() })
	requestAnimationFrame(tick)
}

window.__REDUX_STORE__ = store
