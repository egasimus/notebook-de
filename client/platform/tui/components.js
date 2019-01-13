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

export function Resizable (props) { return (
  <element>{ props.children }</element>
)}

export function Terminal ({ data }) { return (
  <element>Terminal</element>
) }


