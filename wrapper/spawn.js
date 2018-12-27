module.exports = state => {
  state.started = true
  state.debug('starting', state.command)
  state.process = require('child_process').spawn('sh', [ '-c', state.command ])
  require('./streams').forEach((stream, streamIndex) => {
    state[stream] = []
    state.process[stream].on('data', data =>
      require('./on-stream-data')(state, stream, streamIndex, data)) }) }
