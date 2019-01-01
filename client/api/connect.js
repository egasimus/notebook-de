import { Connect, Receive } from '../reducers'
import store from '../store'

export default function connect ({ pid, port }, id) {

  const address = `ws://localhost:${port}`
  const ws = new WebSocket(address)

  const action = Connect(id, port, pid)
  store.dispatch(action)

  ws.onmessage = event => {
    const action = Receive(id, event.data)
    store.dispatch(action)
  }

}
