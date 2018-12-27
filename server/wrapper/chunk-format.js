module.exports = (timestamp, pid, streamIndex, chunkNumber, data) =>
  `${+timestamp} ${pid} ${streamIndex} ${chunkNumber} ${data}`
