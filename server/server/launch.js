module.exports = (current, event) => {

  console.log('Launch', event)

  const client = event[0]
  const topic = event[1][1]
  const command = event[1][2]

  const fork = require('child_process').fork
  const proc = fork('launch/wrapper', [ command ], { stdio: ['pipe','pipe','pipe','ipc'] } )

  proc.stdout.on('data', data => require('./on-stdout')(current, proc, 'stdout', data))
  proc.stderr.on('data', data => require('./on-stderr')(current, proc, 'stderr', data))
  proc.once('close', code => require('./on-close')(current, proc, code))
  proc.once('message', port => require('./communicate')(current, topic, port, client))

}
