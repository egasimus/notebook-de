const { Gtk } = imports.gi
const { Application } = Gtk
import { render } from 'react-gtk'
export default gui => {
  Gtk.init(null)
  app.connect('activate', () =>
    ReactGtk.render(gui, app))
  app.run([])}

