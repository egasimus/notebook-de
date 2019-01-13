import React from 'react'

export function AppRoot ({ className, children }) {
  return <gtk-window>{ children }</gtk-window>
}

export function Column ({ className, children, expand }) {
  return <gtk-vbox expand={expand||false}>{ children }</gtk-vbox>
}

export function Row ({ className, children, expand }) {
  return <gtk-hbox expand={expand||false}>{ children }</gtk-hbox>
}

export function Label ({ className, value, expand }) {
  return <gtk-label expand={expand||false} label={String(value)} />
}

export function Input () {
  return <gtk-entry />
}

export function Resizable () {
  return null
}

export function Spacer () {
  return null
}

export function Terminal () {
  return null
}

