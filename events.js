module.exports = (require, state, key, events) =>
  events.forEach(event=>{
    state[`on-${key}-${event}`] = (...args) => require(`./on-${key}-${event}`)(state, ...args)
    state[key].on(event, (...args) => {
      state[`on-${key}-${event}`](...args)
    }) })
