import { createSlice  } from '@reduxjs/toolkit'

const store = createSlice ({
    name: 'store',
    initialState: {
        token: "",
    },
    reducers: {
      storeToken: (state, action) => {
            state.token = action.payload;
      },
      logOut: (state) => {
          state.token = "";
      }
  },
});

export const { storeToken, logOut } = store.actions;
export default store.reducer;