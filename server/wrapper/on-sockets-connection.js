module.exports = (state, socket) => {
  state.debug('connection', state.sockets.clients.size)
  require('./streams').forEach((stream) => {
    if (state[stream]) require('./send-cache')(state[stream], socket) }) }
