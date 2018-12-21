const { wrap } = require('./helpers')

module.exports = ({ is, end }) =>

  wrap('cat /dev/random', (wrapper, port)=>{
    const WebSocket = require('ws')
        , address = `ws://localhost:${port}`
        , ws1 = new WebSocket(address)
    ws1.once('message', data => {
      const buffer = String(data)
          , ws2    = new WebSocket(address)
      ws2.once('message', data => {
        is(buffer, String(data))
        ws2.close()
        ws1.close()
        wrapper.stop()
        end() }) }) })
