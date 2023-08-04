import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_URL, PATH } from '../../config/config'
import { faker } from '@faker-js/faker'
import pause from '../../util/pause'

const albumsApi = createApi({
  reducerPath: 'albums',
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
          return [{ type: 'Album', id: staff.id }]
        },
        query: (staff) => {
          return {
            method: 'GET',
            url: '/albums',
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
            url: '/albums',
            body: {
              staffId: staff.id,
              title: faker.science.chemicalElement(),
            },
          }
        },
        invalidatesTags: (result, error, staff) => {
          return [{ type: 'Album', id: staff.id }]
        },
      }),
      removeAlbum: builder.mutation({
        query: (album) => {
          return {
            method: 'DELETE',
            url: '/albums/' + album.id,
          }
        },
        invalidatesTags: (result, error, album) => {
          return [{ type: 'Album', id: album.staffId }]
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
