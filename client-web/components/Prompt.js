import React from 'react'
import { connect } from 'react-redux'
import launch from '../client/launch'

export default connect(
  ({ now, cwd }) => ({ now, cwd })
)(Prompt)

function Prompt ({ now, cwd }) { return (
  <div className="Prompt">
    <div>{cwd}</div>
    <input spellCheck="false" onKeyUp={onKeyUp} />
  </div>
)}

function onKeyUp (event) {
  if (event.key === 'Enter') {
    launch(event.target.value)
    event.target.value = ''
  }
}
