const { wrap } = require('./helpers')

module.exports = ({ is, end }) =>
  wrap('echo foo', (wrapper, port)=>{
    const WebSocket = require('ws')
        , address = `ws://localhost:${port}`
        , ws = new WebSocket(address)
    ws.on('message', data => {
      is(String(data).endsWith('foo\n'), true)
      wrapper.stop()
      end() }) })
