module.exports = (state, ...args) => {
  const address = state.sockets.address()
  state.debug('listening', address)
  if (process.send) process.send(address.port)
}
