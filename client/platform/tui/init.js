export default gui => {
  console.log('init tui unui')
  const screen = require('blessed').screen({ autoPadding: true, smartCSR: true })
  screen.key(['q'], (ch, key) => process.exit(0))
  require('react-blessed/dist/index.js').render(gui, screen) }
