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
    {Object.keys(topics).sort().map(id=>
      <div className="WorkspaceItem" key={id}>
        <div className="WorkspaceItemTitle" style={{display:'flex'}}>
          <div><span style={{fontWeight:'bold',color:'#8c0'}}>#{topics[id].pid}</span> {topics[id].command}</div>
          <div className='FlexGrow' />
          <div><span style={{fontWeight:'bold',color:'#8c0'}}>running</span> since <span className="WorkspaceItemTitleDate">{topics[id].started.toISOString().split('T').join(' ').slice(0,-1)}</span></div>
        </div>
        {(!topics[id].data)
            ? 'waiting...'
            : <XTerm value={topics[id].data.join('')} options={options} />}
        </div>
    )}
  </div>
)}
