const staff = 'staff/'

function thunk(action) {
  return staff + action
}

// actions
const fetch = 'fetch'
const add = 'add'
const remove = 'remove'

export const THUNK_TYPE = {
  // @root - Staff
  FETCH: thunk(fetch),
  ADD: thunk(add),
  REMOVE: thunk(remove),
}

export const BUTTONS = {
  // @root - StaffList
  ADD_STAFF: 'ADD STAFF',
}

export const SNACKS = {
  // @root - StaffList
  STAFF_ADDED: 'STAFF ADDED',
}
