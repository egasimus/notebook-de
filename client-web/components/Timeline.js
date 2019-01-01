import React from 'react'
import { connect } from 'react-redux'
import { Column, Spacer, Label } from './platform/web'
import TimelineItem from './TimelineItem'

export default connect(
  ({ now, start, latest, timeline, topics }) => ({ now, start, latest, timeline, topics })
)(Timeline)

function Timeline ({ now, start, latest, timeline, topics }) { return (
  <Column className="Timeline">
    {timeline.map(id=><TimelineItem key={id} date={topics[id].started.toISOString()} command={topics[id].command} />)}
    <Spacer />
    <Label className="Time">{new Date(now).toISOString()}</Label>
  </Column>
) }
