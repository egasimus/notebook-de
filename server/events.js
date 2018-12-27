module.exports = (_require, state, key, events) => {
  require('./methods')(_require, state, events.map(event=>`on-${key}-${event}`))
  events.forEach(event =>
    state[key].on(event, (...args) =>
      state[`on-${key}-${event}`](...args))) }
