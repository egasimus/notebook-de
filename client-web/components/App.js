import React from 'react'

import Timeline from './Timeline'
import Workspace from './Workspace'
import Prompt from './Prompt'

export default App

function App () { return (
  <div className="App FlexColumn">
    <div className="FlexRow">
      <Workspace className="FlexGrow" />
      <Timeline />
    </div>
    <Prompt />
  </div>
)}
