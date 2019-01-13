document.body.innerHTML = '<div id="Root">Initializing...</div>'
import './styles'

import store from './store'
import init from './api/init'
init()

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('Root'))

requestAnimationFrame(tick)
function tick () {
	store.dispatch({ type: 'Tick', now: + new Date() })
	requestAnimationFrame(tick)
}

window.__REDUX_STORE__ = store
