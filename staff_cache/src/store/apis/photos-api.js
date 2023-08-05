import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  SERVER_URL,
  ALBUM_COVER,
  REDUCER_PATHS,
  TAGS,
} from '../../config/config'
import { faker } from '@faker-js/faker'

const photosApi = createApi({
  reducerPath: REDUCER_PATHS.ALBUM_COVER,
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          return [
            {
              type: TAGS.ALBUM_COVER,
              id: album.id,
            },
          ]
        },
        query: (album) => {
          return {
            method: 'GET',
            url: ALBUM_COVER,
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
            url: ALBUM_COVER,
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          }
        },
        invalidatesTags: (result, error, album) => {
          return [{ type: TAGS.ALBUM_COVER, id: album.id }]
        },
      }),
      removePhoto: builder.mutation({
        query: (photo) => {
          return {
            method: 'DELETE',
            url: ALBUM_COVER + '/' + photo.id,
          }
        },
        invalidatesTags: (result, error, photo) => {
          return [{ type: TAGS.ALBUM_COVER, id: photo.albumId }]
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
