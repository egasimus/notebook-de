import { GET } from './platform'
import connect from './connect'
import { Launch, FatalError } from '../reducers'
import store from '../store'

export default function init () {
  GET()
    .then(body=>{
      body = JSON.parse(body)
      Object.keys(body).forEach(port=>{
        const action = Launch(body[port].command)
        store.dispatch(action)
        connect({ port, pid: body[port].pid }, action.id) }) })
    .catch(error=>
      store.dispatch(FatalError(error))) }
