import React from 'react'
import { connect } from 'react-redux'

export default connect(
  ({ topics, viewers }) => ({ topics, viewers })
)(Windows)

function Windows ({ topics, viewers }) { return (
  <div className="Workspace">
  </div>
)}
