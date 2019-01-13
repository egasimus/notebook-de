import React from 'react'
import { connect } from 'react-redux'
import { Column, Resizable, Terminal } from '$PLATFORM/components'
import WindowTitle from './WindowTitle'

export default connect(
  ({ topics }) => ({ topics })
)(Window)

function Window ({ topics, id }) { return (
  <Column className="WorkspaceItem">
    <WindowTitle pid={topics[id].pid} command={topics[id].command} started={topics[id].started} />
    <Resizable axis="y">
      <Terminal data={topics[id].data} />
    </Resizable>
  </Column>
)}

