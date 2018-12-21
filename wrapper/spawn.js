module.exports = state => {
  state.started = true
  state.debug('starting', state.command)
  require('./streams').forEach(stream => { state[stream] = [] })
  state.process = require('child_process').spawn('sh', [ '-c', state.command ]) }
