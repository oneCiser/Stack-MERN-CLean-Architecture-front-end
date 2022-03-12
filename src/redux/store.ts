import { configureStore } from '@reduxjs/toolkit'
import TokenReducer from './token'

export default configureStore({
    reducer: {
      token: TokenReducer,
    },
});