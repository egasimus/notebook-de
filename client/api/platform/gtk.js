export function GET () {
  return new Promise((resolve)=>{
    const { Session, SessionAsync, ProxyResolverDefault, Message } = imports.gi.Soup
    const session = new SessionAsync()
    Session.prototype.add_feature.call(session, new ProxyResolverDefault())
    const method = 'GET'
    const request = Message.new(method, uri)
    request.connect('got_headers', message => {})
    request.connect('got_chunk',   message => {})
    session.queue_message(request, (session, message) => {
      resolve(message)
    })
  })
}

export function POST (data) {
  return new Promise((resolve)=>{
    const { Session, SessionAsync, ProxyResolverDefault, Message } = imports.gi.Soup
    const session = new SessionAsync()
    Session.prototype.add_feature.call(session, new ProxyResolverDefault())
    const method = 'GET'
    const request = Message.new(method, uri)
    request.connect('got_headers', message => {})
    request.connect('got_chunk',   message => {})
    session.queue_message(request, (session, message) => {
      resolve(message)
    })
  })
}
