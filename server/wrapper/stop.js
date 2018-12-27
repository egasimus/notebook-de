module.exports = (state, ...args) => {
  state.debug('stopping')
  if (state.process) state.process.kill()
  state.sockets.close()
}
