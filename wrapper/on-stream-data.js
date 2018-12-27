module.exports = (state, stream, streamIndex, data) => {
  const chunk = require('./chunk-format')(+ new Date(), state.process.pid, streamIndex, state[stream].length, data)
  require('./chunk-cache')(state[stream], chunk)
  for (let socket of state.sockets.clients) {
    require('./chunk-send')(state, stream, socket, chunk) } }
