const SERVER_URL = 'http://localhost:3003'

const STAFF = '/staff'
const ALBUM = '/album'
const SONG = '/song'

function get_url(path) {
  return SERVER_URL + path
}

export const PATH = {
  STAFF: get_url(STAFF),
  ALBUM: get_url(ALBUM),
  SONG: get_url(SONG),
}
