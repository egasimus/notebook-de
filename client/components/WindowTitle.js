import React from 'react'
// import { IoMdRefresh, IoIosArrowUp, IoMdClose } from 'react-icons/io'
import { Column, Row, Spacer, Label } from './platform'

export default function WindowTitle ({ pid, command, started }) { return (
  <Row className="WorkspaceItemTitle">
    <Column>
      <Label value={`#${pid} ${command}`} />
      <Label value={`running since ${started.toISOString().split('T').join(' ').slice(0,-1)}`} />
    </Column>
    <Spacer />
  </Row>
) }

/*
<div className="WorkspaceItemTitleIcon"><IoMdRefresh /></div>
<div className="WorkspaceItemTitleIcon"><IoIosArrowUp /></div>
<div className="WorkspaceItemTitleIcon"><IoMdClose /></div>
*/
