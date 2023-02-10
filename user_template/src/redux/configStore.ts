import { configureStore } from '@reduxjs/toolkit'
import positionReducer from './reducers/positionReducer'
import roomReducer from './reducers/roomReducer'


export const store = configureStore({
  reducer: {
    positionReducer: positionReducer,
    roomReducer: roomReducer,
  }
})


// Lấy type của state
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type DispatchType = typeof store.dispatch
