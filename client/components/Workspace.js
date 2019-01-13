import React from 'react'
import { connect } from 'react-redux'
import { Column } from '$PLATFORM/components'
import Window from './Window'

export default connect(
  ({ topics }) => ({ topics })
)(Windows)

function Windows ({ topics }) { return (
  <Column className="Workspace" expand={true}>
    {Object.keys(topics).sort().map(id=><Window id={id} key={id} />)}
  </Column>
)}
