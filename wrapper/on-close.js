module.exports = (state, ...args) => {
  state.debug('closed', `${state.sockets.options.host}:${state.sockets.options.port}`)
}
