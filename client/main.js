import store from './store'
import initAPI from './api/init'
import React from 'react'
import App from './components/App'
import { Provider } from 'react-redux'
import initPlatform from '$PLATFORM/init'
initAPI()
initPlatform(<Provider store={store}><App /></Provider>)
