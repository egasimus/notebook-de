module.exports = (state, socket) => {
  state.debug('connection', state.sockets.clients.size)
  require('./streams').forEach((stream, streamIndex) => {
    require('./send-cache')(state[stream], socket)
    state.process[stream].on('data', data =>
      require('./on-data')(state, socket, data)) }
