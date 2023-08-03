import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_URL, PATH } from '../../config/config'

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
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
      createAlbums: builder.mutation({
        query: (album) => {
          return {
            method: 'POST',
            url: '/albums',
            body: album,
          }
        },
      }),
    }
  },
})

export const { useFetchAlbumsQuery, useCreateAlbumsMutation } = albumsApi
export { albumsApi }
