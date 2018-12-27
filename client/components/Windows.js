import React from 'react'
import { connect } from 'react-redux'
import { XTerm } from 'react-xterm'
import '../node_modules/xterm/src/xterm.css'

const addons = [ 'fit' ]

const options = { convertEol: true, fontSize: 10, cols: 157 }//, rendererType: 'dom' }

export default connect(
  ({ timeline, topics }) => ({ timeline, topics })
)(Windows)

function Windows ({ timeline, topics }) { return (
  <div className="Workspace">
    {timeline.map(id=>
      <div className="WorkspaceItem" key={id}>
        <div className="WorkspaceItemTitle">{topics[id].started.toISOString()} {topics[id].command}</div>
        {(!topics[id].data)
            ? 'waiting...'
            : <XTerm value={topics[id].data.join('')} options={options} />}
        </div>
    )}
  </div>
)}
