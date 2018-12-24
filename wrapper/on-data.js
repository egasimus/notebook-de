module.exports = (state, socket, data) => {
  const chunk = require('./format-chunk')(+ new Date(), state.process.pid, streamIndex, state[stream].length, data)
  require('./chunk-cache')(state, stream, chunk)
  require('./chunk-send')(state, stream, socket, chunk) }
