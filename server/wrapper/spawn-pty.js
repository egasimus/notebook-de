module.exports = state => {
  state.started = true
  state.debug('starting', state.command)
  state.process = require('node-pty').spawn('sh', [ '-c', state.command ])
  state.process.on('data', data =>
    require('./on-stream-data')(state, null, 0, data)) }

