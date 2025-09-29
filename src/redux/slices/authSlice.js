import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { username, password, admins } = action.payload;
      const found = admins.find(
        (a) => a.username === username && a.password === password
      );

      if (found) {
        state.user = found;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Login yoki parol noto‘g‘ri ❌";
        state.isAuthenticated = false;
      }
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

// selector
export const selectAuth = (state) => state.auth;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthError = (state) => state.auth.error;
