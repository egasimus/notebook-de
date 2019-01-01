import React from 'react'

export function AppRoot ({ className, children }) {
  return <gtk-window>{ children }</gtk-window>
}

export function Column ({ className, children }) {
  return <gtk-vbox>{ children }</gtk-vbox>
}

export function Row ({ className, children }) {
  return <gtk-hbox>{ children }</gtk-hbox>
}

export function Label ({ className, value }) {
  return <gtk-label label={String(value)} />
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
