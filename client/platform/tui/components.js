import React from 'react'

export function AppRoot ({ className, children }) {
  return <element>{ children }</element>
}

export function Spacer () {
  return <element />
}

export function Column ({ className, children }) {
  return <element>{ children }</element>
}

export function Row ({ className, children }) {
  return <element>{ children }</element>
}

export function Label ({ className, value }) {
  return <element>{ value }</element>
}

export function Input ({ className, onKeyUp }) {
  return <element />
}

import { Resizable as _Resizable } from 'react-resizable'
import 'react-resizable/css/styles.css'

export function Resizable (props) { return (
  <_Resizable {...Object.assign({}, props, { children: undefined })}>
    <div>
      { props.children } 
    </div>
  </_Resizable>
)}

import { XTerm } from 'react-xterm'
import 'xterm/src/xterm.css'
const addons  = [ 'fit' ]
    , options = { convertEol: true, fontSize: 10 }//, rendererType: 'dom' }

export function Terminal ({ data }) { return (
  (!!data)
    ? <XTerm value={data.join('')} options={options} addons={addons} />
    : 'waiting...'
) }


