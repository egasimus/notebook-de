import connect from './connect'
import { Launch } from '../reducers'
import store from '../store'

export default function launch (command) {
  console.debug(command)
  const action = Launch(command)
  store.dispatch(action)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://localhost:5678')
  xhr.onload = () => connect(JSON.parse(xhr.responseText).port, action.id)
  xhr.send(command)
}
