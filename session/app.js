const { app, BrowserWindow } = require('electron')

let w

if (!app.requestSingleInstanceLock()) app.quit()

app.once('ready', () => {

  const options =
    { width:  800
    , height: 600
    , frame:  false
    , backgroundColor: '#000'
    , show: false }

  w = new BrowserWindow(options)
  w.once('ready-to-show', () => { w.show() })
  w.once('closed', () => { w = null })

  w.setMenu(null)
  w.webContents.openDevTools()
  // w.webContents.executeJavaScript("location.href='http://localhost:8080'")
  w.loadURL(`file://${__dirname}/index.html`)
  // w.loadURL(`index.html`)

})
