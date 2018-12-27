module.exports = (state) => {
  const address = state.server.address()
  console.debug(`listening on ${JSON.stringify(address)}`)
  if (process.send) process.send(address.port)
}
