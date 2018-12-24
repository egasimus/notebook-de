module.exports = (state, stream, chunk) => 
  state[stream].push(chunk)
