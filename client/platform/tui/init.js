import blessed from 'blessed'
import { render } from 'react-blessed'
export default gui => {
  const screen = blessed.screen({ autoPadding: true, smartCSR: true })
  screen.key(['q'], (ch, key) => process.exit(0))
  render(gui, screen) }

