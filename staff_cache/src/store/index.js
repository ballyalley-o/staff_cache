import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { staffReducer } from './slices/staff-slice'
import { albumsApi } from './apis/albums-api'

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware)
  },
})

setupListeners(store.dispatch)

export * from './thunks'
export * from './apis'
