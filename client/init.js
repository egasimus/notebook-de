import connect from './connect'
import { Launch } from '../reducers'
import store from '../store'

export default function init () {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:5678')
  xhr.onload = () => JSON.parse(xhr.responseText).forEach(port=>{
    const action = Launch(port)
    store.dispatch(action)
    connect(port, action.id)
  })
  xhr.send()
}
