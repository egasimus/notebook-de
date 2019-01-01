import React from 'react'
import { connect } from 'react-redux'
import Window from './Window'
import { Column } from './platform/web'

export default connect(
  ({ topics }) => ({ topics })
)(Windows)

function Windows ({ topics }) { return (
  <Column className="Workspace">
    {Object.keys(topics).sort().map(id=>
      <Window id={id} key={id} />
    )}
  </Column>
)}
