module.exports = (state, ...args) => {
  if (!state.started) require('./spawn')(state)
  const address = state.sockets.address()
  state.debug('listening', address)
  if (process.send) process.send(address.port) }
