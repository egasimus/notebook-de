module.exports = (state, socket) =>  
  require('./streams').forEach((stream, i) => {
    state[stream].forEach(chunk => socket.send(chunk))
    state.process[stream].on('data', function sendChunk (data) {
      if (socket.readyState === 3) {
        state.process[stream].off('data', sendChunk)
        state.debug('socket closed')
        return }
      const chunk = `${+ new Date()} ${state.process.pid} ${i} ${state[stream].length} ${data}`
      state[stream].push(chunk)
      socket.send(chunk) }) })
