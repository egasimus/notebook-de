export function GET () {
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = e => reject(e)
    xhr.open('GET', process.env.API_URI)
    xhr.send() }) }

export function POST (data) {
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = e => reject(e)
    xhr.open('POST', process.env.API_URI)
    xhr.send(data) }) }
