module.exports = (cache, socket) => 
  cache.forEach(chunk => socket.send(chunk))
