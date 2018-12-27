import React from 'react'
import { connect } from 'react-redux'

export default connect(
  ({ now, start, latest, timeline, topics }) => ({ now, start, latest, timeline, topics })
)(Timeline)

function Timeline ({ now, start, latest, timeline, topics }) { return (
  <div className="Timeline">
    {timeline.map(id=>
      <div className="TimelineItem" key={id}>
        <div className="TimelineItemDate">{topics[id].started.toISOString()}</div>
        <div className="TimelineItemCommand">{topics[id].command}</div>
      </div>
    )}
    <div className="FlexGrow"></div>
    <div className="Time">{new Date(now).toISOString()}</div>
  </div>
)}
