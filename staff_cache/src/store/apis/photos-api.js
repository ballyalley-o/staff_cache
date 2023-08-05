import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_URL, PATH } from '../../config/config'
import { faker } from '@faker-js/faker'

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          return [
            {
              type: 'AlbumPhoto',
              id: album.id,
            },
          ]
        },
        query: (album) => {
          return {
            method: 'GET',
            url: '/photos',
            params: {
              albumId: album.id,
            },
          }
        },
      }),
      createPhoto: builder.mutation({
        query: (album) => {
          return {
            method: 'POST',
            url: '/photos',
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          }
        },
        invalidatesTags: (result, error, album) => {
          return [{ type: 'AlbumPhoto', id: album.id }]
        },
      }),
      removePhoto: builder.mutation({
        query: (photo) => {
          return {
            method: 'DELETE',
            url: '/photos/' + photo.id,
          }
        },
        invalidatesTags: (result, error, photo) => {
          return [{ type: 'AlbumPhoto', id: photo.albumId }]
        },
      }),
    }
  },
})

export const {
  useFetchPhotosQuery,
  useCreatePhotoMutation,
  useRemovePhotoMutation,
} = photosApi
export { photosApi }
