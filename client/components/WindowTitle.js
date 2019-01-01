import React from 'react'
import { IoMdRefresh, IoIosArrowUp, IoMdClose } from 'react-icons/io'
import { Column, Row, Spacer } from './platform/web'

export default function WindowTitle ({ pid, command, started }) { return (
  <Row className="WorkspaceItemTitle">
    <Column>
      <div><span style={{fontWeight:'bold',color:'#8c0'}}>#{pid}</span> {command}</div>
      <div><span style={{fontWeight:'bold',color:'#8c0'}}>running</span> since <span className="WorkspaceItemTitleDate">{started.toISOString().split('T').join(' ').slice(0,-1)}</span></div>
    </Column>
    <Spacer />
  </Row>
) }

/*
<div className="WorkspaceItemTitleIcon"><IoMdRefresh /></div>
<div className="WorkspaceItemTitleIcon"><IoIosArrowUp /></div>
<div className="WorkspaceItemTitleIcon"><IoMdClose /></div>
*/
