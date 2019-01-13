import { POST } from '$PLATFORM/api'
import connect from './connect'
import { Launch } from '../reducers'
import store from '../store'

export default function launch (command) {
  const action = Launch(command)
  store.dispatch(action)
  const uri = 'http://localhost:5678'
  const method = 'POST'
  POST(command)
    .then(body=>{
      const { port } = JSON.parse(body)
      connect(port, action.id) })
    .catch(error=>
      store.dispatch(FatalError(error))) }
