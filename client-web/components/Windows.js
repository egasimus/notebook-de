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
        <div className="WorkspaceItemTitle">
          <span className="WorkspaceItemTitleDate">{topics[id].started.toISOString().split('T').join(' ').slice(0,-1)} </span>
          <span>{topics[id].command}</span>
          <div style={{color:"#8c0"}}>PID <strong>23245</strong>, running</div>
        </div>
        {(!topics[id].data)
            ? 'waiting...'
            : <XTerm value={topics[id].data.join('')} options={options} />}
        </div>
    )}
  </div>
)}
