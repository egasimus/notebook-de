import React from 'react'
import { connect } from 'react-redux'
import Window from './Window'

export default connect(
  ({ topics }) => ({ topics })
)(Windows)

function Windows ({ topics }) { return (
  <div className="Workspace">
    {Object.keys(topics).sort().map(id=>
      <Window id={id} key={id} />
    )}
  </div>
)}
