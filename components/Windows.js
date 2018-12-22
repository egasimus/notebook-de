import React from 'react'
import { connect } from 'react-redux'

export default connect(
  ({ timeline, topics }) => ({ timeline, topics })
)(Windows)

function Windows ({ timeline, topics }) { return (
  <div className="Workspace">
    {timeline.map(id=>
      <div className="WorkspaceItem" key={id}>{
        topics[id].data || 'waiting...'
      }</div>
    )}
  </div>
)}
