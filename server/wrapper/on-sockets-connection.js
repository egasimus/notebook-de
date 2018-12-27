module.exports = (state, socket) => {
  state.debug('connection', state.sockets.clients.size)
  state.cache.forEach(chunk => socket.send(chunk)) }
