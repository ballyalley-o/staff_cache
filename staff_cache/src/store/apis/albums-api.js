import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_URL, PATH } from '../../config/config'
import { faker } from '@faker-js/faker'

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: ['Album'],
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
        invalidatesTags: ['Album'],
      }),
    }
  },
})

export const { useFetchAlbumsQuery, useCreateAlbumsMutation } = albumsApi
export { albumsApi }
