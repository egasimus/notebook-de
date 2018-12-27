module.exports = (_require, state, methods) =>
  methods.forEach(method =>
    state[method] = (...args) => _require(`./${method}`)(state, ...args))
