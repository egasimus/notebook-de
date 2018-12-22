const METHODS =
  [ 'debug'
  , 'stop' ]

const EVENTS =
  [ 'close'
  , 'connection'
  , 'error'
  , 'headers'
  , 'listening' ]

module.exports = Launch

if (require.main === module) {
  const port = process.argv[2]
  const command = process.argv.slice(3).join(' ')
  module.exports(port, command)
}

function Launch (port, command) {

  const state = {
    started: false,
    port,
    command }

  METHODS.forEach(method=>
    state[method] = (...args) => require(`./${method}`)(state, ...args))

  state.sockets = new (require('ws').Server)({
    clientTracking: true,
    host: '127.0.0.1',
    port })

  EVENTS.forEach(event=>{
    state.sockets.on(event, (...args) => state[`on-${event}`](...args))
    state[`on-${event}`] = (...args) => {
      const handler = require(`./on-${event}`)
      return handler(state, ...args) } })

  return state

}
