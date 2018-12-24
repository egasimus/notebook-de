module.exports = (state, stream, socket, chunk) => {
  if (socket.readyState === 3) {
    state.process[stream].off('data', sendChunk)
    state.debug('socket closed')
    return }
  socket.send(chunk) }
