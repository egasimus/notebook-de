import React from 'react'
import { Column, Label } from '$PLATFORM/components'

export default function TimelineItem ({ date, command }) { return (
  <Column className="TimelineItem">
    <Label className="TimelineItemDate" value={date} />
    <Label className="TimelineItemCommand" value={command} />
  </Column>
) }
