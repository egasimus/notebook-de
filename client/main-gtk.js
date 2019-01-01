import store from './store'
import init from './api/init'
init()

import React from 'react'
import ReactGtk from 'react-gtk'
import { Provider } from 'react-redux'
import App from './components/App'
const { Gtk } = imports.gi
const { Application } = Gtk

Gtk.init(null)
const app = new Application()
app.connect('activate', () => {
  ReactGtk.render(
    <Provider store={store}><App /></Provider>,
    app) })

app.run([]);
