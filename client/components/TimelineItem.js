import React from 'react'
import { Column, Label } from './platform/web'

export default function TimelineItem ({ date, command }) { return (
  <Column className="TimelineItem">
    <Label className="TimelineItemDate">{date}</Label>
    <Label className="TimelineItemCommand">{command}</Label>
  </Column>
) }
