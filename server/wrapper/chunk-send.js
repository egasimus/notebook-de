module.exports = (state, stream, socket, chunk) => {
  if (socket.readyState === 3) {
    // state.process[stream].off('data', sendChunk) TODO what to do on closed?
    state.debug('socket closed')
    return }
  socket.send(chunk) }
