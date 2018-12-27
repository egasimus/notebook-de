module.exports = (state, ...args) => {
  if (!state.started) {
    require('./spawn-pty')(state)
    state.pid = state.process.pid }
  const address = state.sockets.address()
  state.debug('listening', address)
  if (process.send) process.send(address.port) }
