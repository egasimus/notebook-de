#!/usr/bin/env node
const { resolve } = require('path')
const { fork, spawn } = require('child_process')

require('freeport')((err, port)=>{
  if (err) throw err
  startServer(port)
})

function startServer (port, cb) {

  const options = { cwd: resolve(__dirname, 'server'), stdio: 'inherit' }
  const server = require('../server/server')(port)
  server.server.once('listening', startClient)

  function startClient () {
    const options = { method: 'POST', hostname: 'localhost', port }
    const command = `cd ${resolve(__dirname, '../client-web')} && npm run dev`
    const request = require('http').request(options, clientStarted)
    request.write(command)
    request.end()
  }

  function clientStarted (response) {
    const electron = require('electron')
    const args = [ resolve(__dirname, 'app.js'), 'http://localhost:8000' ]
    const app = spawn(electron, args, { stdio: 'inherit' })
    app.unref()
  }

}
