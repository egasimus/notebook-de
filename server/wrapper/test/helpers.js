module.exports = { wrap }

function wrap (command, cb) {
  const Launch = require('..')
  require('freeport')((err, port)=>{
    const wrapper = Launch(port, command)
    const onSocketsListening = wrapper['on-sockets-listening']
    wrapper['on-sockets-listening'] = (...args) => {
      onSocketsListening(...args)
      cb(wrapper, port) } }) }

