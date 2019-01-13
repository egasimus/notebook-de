import React from 'react'
import { connect } from 'react-redux'
import { Row, Label, Input } from '$PLATFORM/components'
import launch from '../api/launch'

export default connect(
  ({ now, cwd }) => ({ now, cwd })
)(Prompt)

function Prompt ({ now, cwd }) { return (
  <Row className="Prompt">
    <Label value={cwd} />
    <Input onKeyUp={onKeyUp} />
  </Row>
)}

function onKeyUp (event) {
  if (event.key === 'Enter') {
    launch(event.target.value)
    event.target.value = ''
  }
}
