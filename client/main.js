import initPlatform from '$PLATFORM/init'
import store from './store'
import initAPI from './api/init'
import React from 'react'
import { Provider } from 'react-redux'
import App from './components/App'
initAPI()
initPlatform(<Provider store={store}><App /></Provider>)
