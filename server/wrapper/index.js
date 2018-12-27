require('../hot')

const METHODS =
  [ 'debug'
  , 'stop' ]

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
    port,
    headers: { 'Access-Control-Allow-Origin': '*' } })

  require('../events')(require, state, 'sockets',
    [ 'close'
    , 'connection'
    , 'error'
    , 'headers'
    , 'listening' ])

  return state

}
