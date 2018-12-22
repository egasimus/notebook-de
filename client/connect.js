export default function connect (port) {
  console.debug('connect', port)
  const ws = new WebSocket(`ws://localhost:${port}`)
  ws.onmessage = event => {
    console.log(port, event.data)
  }
}
