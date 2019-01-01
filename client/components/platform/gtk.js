import React from 'react'

export function AppRoot ({ className, children }) {
  return <gtk-window className={className}>{ children }</gtk-window>
}

export function Column ({ className, children }) {
  return <gtk-vbox className={className}>{ children }</gtk-vbox>
}

export function Row ({ className, children }) {
  return <gtk-hbox className={className}>{ children }</gtk-hbox>
}

export function Label ({ className, children }) {
  return <gtk-label className={className}>{ children }</gtk-label>
}
