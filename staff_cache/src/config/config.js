export const SERVER_URL = 'http://localhost:3003'

export const STAFF = '/staff'
export const ALBUM = '/albums'
export const ALBUM_COVER = '/photos'
export const SONG = '/song'

function get_url(path) {
  return SERVER_URL + path
}

export const PATH = {
  STAFF: get_url(STAFF),
  ALBUM: get_url(ALBUM),
  SONG: get_url(SONG),
}

export const REDUCER_PATHS = {
  ALBUMS: 'albums',
  ALBUM_COVER: 'photos',
}

export const TAGS = {
  ALBUM: 'Album',
  ALBUM_COVER: 'AlbumPhoto',
}
