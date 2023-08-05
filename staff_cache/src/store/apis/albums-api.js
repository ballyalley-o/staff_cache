import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_URL, ALBUM, REDUCER_PATHS, TAGS } from '../../config/config'
import { faker } from '@faker-js/faker'
import pause from '../../util/pause'

const albumsApi = createApi({
  reducerPath: REDUCER_PATHS.ALBUMS,
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    fetchFn: async (...args) => {
      await pause(1000)
      return fetch(...args)
    },
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: (result, error, staff) => {
          return [{ type: TAGS.ALBUM, id: staff.id }]
        },
        query: (staff) => {
          return {
            method: 'GET',
            url: ALBUM,
            params: {
              staffId: staff.id,
            },
          }
        },
      }),
      createAlbum: builder.mutation({
        query: (staff) => {
          return {
            method: 'POST',
            url: ALBUM,
            body: {
              staffId: staff.id,
              title: faker.science.chemicalElement(),
            },
          }
        },
        invalidatesTags: (result, error, staff) => {
          return [{ type: TAGS.ALBUM, id: staff.id }]
        },
      }),
      removeAlbum: builder.mutation({
        query: (album) => {
          return {
            method: 'DELETE',
            url: ALBUM + '/' + album.id,
          }
        },
        invalidatesTags: (result, error, album) => {
          return [{ type: TAGS.ALBUM, id: album.staffId }]
        },
      }),
    }
  },
})

export const {
  useFetchAlbumsQuery,
  useCreateAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi
export { albumsApi }
