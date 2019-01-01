import connect from './connect'
import { Launch, FatalError } from '../reducers'
import store from '../store'

export default function init () {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:5678')
  xhr.onload = () => {
    const commands = JSON.parse(xhr.responseText)
    Object.keys(commands).forEach(port=>{
      const action = Launch(commands[port].command)
      store.dispatch(action)
      connect({ port, pid: commands[port].pid }, action.id) }) }
  xhr.onerror = () => {
    store.dispatch(FatalError()) }
  xhr.send() }
