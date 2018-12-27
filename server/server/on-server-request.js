module.exports = (state, request, response) => {
  require(`./request-${request.method}`)(state, request, response)
}
