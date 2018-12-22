export default Reducer

export const Tick = () => ({ type: 'Tick', now: + new Date() })

const INITIAL_STATE =

  { now:    + new Date()
  , start:  + new Date()
  , latest: + new Date()

  , topics: [] }

function Reducer (state = INITIAL_STATE, action) {

  const type = action.type
  delete action.type
  let newState = state

  if (type === 'Tick') {
    newState = { ...state, now: action.now }
  }

  return newState
}
