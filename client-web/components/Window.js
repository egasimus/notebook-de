import React from 'react'
import { connect } from 'react-redux'

import { Resizable } from 'react-resizable'
import '../node_modules/react-resizable/css/styles.css'

import { XTerm } from 'react-xterm'
import '../node_modules/xterm/src/xterm.css'

import WindowTitle from './WindowTitle'

const addons  = [ 'fit' ]
    , options = { convertEol: true, fontSize: 10 }//, rendererType: 'dom' }

export default connect(
  ({ topics }) => ({ topics })
)(Window)

function Window ({ topics, id }) { return (
  <div className="WorkspaceItem">
    <WindowTitle pid={topics[id].pid} command={topics[id].command} started={topics[id].started} />
    <Resizable axis="y">
      <div>
      {(!topics[id].data)
          ? 'waiting...'
          : <XTerm value={topics[id].data.join('')} options={options} addons={addons} />}
      </div>
    </Resizable>
  </div>
)}

