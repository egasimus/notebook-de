module.exports = (state, socket) => {
  state.debug('connection', state.sockets.clients.size)
  if (!state.started) require('./spawn')(state)
  require('./send')(state, socket) }
