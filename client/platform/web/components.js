import React from 'react'

export function AppRoot ({ className, children }) {
  return <div className={`App ${className}`}>{ children }</div>
}

export function Spacer () {
  return <div className="FlexGrow" />
}

export function Column ({ className, children }) {
  return <div className={`FlexColumn ${className}`}>{ children }</div>
}

export function Row ({ className, children }) {
  return <div className={`FlexRow ${className}`}>{ children }</div>
}

export function Label ({ className, value }) {
  return <div className={`Label ${className}`}>{ value }</div>
}

export function Input ({ className, onKeyUp }) {
  return <input spellCheck="false" onKeyUp={onKeyUp} className={`Input ${className}`} />
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

