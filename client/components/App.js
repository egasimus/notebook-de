import React from 'react'
import { AppRoot, Column, Row } from '$PLATFORM/components'
import Timeline from './Timeline'
import Workspace from './Workspace'
import Prompt from './Prompt'

export default App

function App () { return (
  <AppRoot>
    <Column>
      <Row expand={true}>
        <Workspace className="FlexGrow" />
        <Timeline />
      </Row>
      <Prompt />
    </Column>
  </AppRoot>
)}
