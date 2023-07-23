const staff = 'staff/'

function thunk(action) {
  return staff + action
}

// actions
const fetch = 'fetch'
const add = 'add'

export const THUNK_TYPE = {
  // @root - Staff
  FETCH: thunk(fetch),
  ADD: thunk(add),
}

export const BUTTONS = {
  // @root - StaffList
  ADD_STAFF: 'ADD STAFF',
}

export const SNACKS = {
  // @root - StaffList
  STAFF_ADDED: 'STAFF ADDED',
}
