module.exports = { wrap }

function wrap (command, cb) {
  const Launch = require('..')
  require('freeport')((err, port)=>{
    const wrapper = Launch(port, command)
    wrapper['on-listening'] = () => {
      console.debug('listening')
      cb(wrapper, port) } }) }

