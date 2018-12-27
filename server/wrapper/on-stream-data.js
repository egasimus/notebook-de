module.exports = (state, stream, streamIndex, data) => {
  const chunk = require('./chunk-format')(+ new Date(), state.process.pid, streamIndex, state.cache.length, data)
  state.cache.push(chunk)
  for (let socket of state.sockets.clients) {
    require('./chunk-send')(state, stream, socket, chunk) } }
