import React from 'react'
import { connect } from 'react-redux'

export default connect(
  ({ now, start, latest, topics }) => ({ now, start, latest, topics })
)(Timeline)

function Timeline ({ now, start, latest, topics }) { return (
  <div className="Timeline">
  </div>
)}
