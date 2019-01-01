import React from 'react'
import { AppRoot, Column, Row } from './platform'
import Timeline from './Timeline'
import Workspace from './Workspace'
import Prompt from './Prompt'

export default App

function App () { return (
  <AppRoot>
    <Column>
      <Row>
        <Workspace className="FlexGrow" />
        <Timeline />
      </Row>
      <Prompt />
    </Column>
  </AppRoot>
)}
