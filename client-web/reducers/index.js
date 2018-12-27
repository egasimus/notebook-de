import { generate } from 'shortid'

export default Reducer

export const Tick = () => ({ type: 'Tick', now: +new Date() })

export const Launch = (command) => ({ type: 'Launch', id: generate(), started: new Date(), command })

export const Connect = (id, port, pid) => ({ type: 'Connect', id, port, pid })

export const Receive = (id, data) => ({ type: 'Receive', id, data })

const INITIAL_STATE =

  { now:    + new Date()
  , start:  + new Date()
  , latest: + new Date()

  , timeline: []
  , topics:   {} }

function Reducer (state = INITIAL_STATE, action) {

  const type = action.type
  delete action.type
  let newState = state

  if (type === 'Tick') {
    newState = { ...state, now: action.now }
  }

  if (type === 'Launch') {
    newState = {
      ...state,
      timeline: [ ...newState.timeline, action.id ],
      topics:   { ...newState.topics, [action.id]: action }
    }
  }

  if (type === 'Connect') {
    newState = {
      ...state,
      topics: { ...newState.topics, [action.id]: { ...newState.topics[action.id], ...action } }
    }
  }

  if (type === 'Receive') {
    newState = {
      ...state,
      topics: { ...newState.topics, [action.id]: { ...newState.topics[action.id], data: [ ...newState.topics[action.id].data||[], action.data ] } }
    }
  }

  return newState
}
