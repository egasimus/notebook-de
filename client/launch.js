import connect from './connect'

export default function launch (command) {
  console.debug(command)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://localhost:5678')
  xhr.onload = () => connect(xhr.responseText)
  xhr.send(command)
}
