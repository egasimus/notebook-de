import { createStore } from 'redux'
// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
// import ReduxThunk from 'redux-thunk'

export default createStore(reducer)
  // reducer,
  // composeWithDevTools(applyMiddleware(ReduxThunk)))

