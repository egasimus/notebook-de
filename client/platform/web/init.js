import { render } from 'react-dom'
import './style'
document.body.innerHTML = '<div id="Root">Initializing...</div>'
export default gui => { render(gui, document.getElementById('Root')) }

