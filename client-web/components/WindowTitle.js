import React from 'react'
import { IoMdRefresh, IoIosArrowUp, IoMdClose } from 'react-icons/io'

export default function WindowTitle ({ pid, command, started }) { return (
  <div className="WorkspaceItemTitle" style={{display:'flex'}}>
    <div>
      <div><span style={{fontWeight:'bold',color:'#8c0'}}>#{pid}</span> {command}</div>
      <div><span style={{fontWeight:'bold',color:'#8c0'}}>running</span> since <span className="WorkspaceItemTitleDate">{started.toISOString().split('T').join(' ').slice(0,-1)}</span></div>
    </div>
    <div className='FlexGrow' />
    <div className="WorkspaceItemTitleIcon"><IoMdRefresh /></div>
    <div className="WorkspaceItemTitleIcon"><IoIosArrowUp /></div>
    <div className="WorkspaceItemTitleIcon"><IoMdClose /></div>
  </div>
) }
