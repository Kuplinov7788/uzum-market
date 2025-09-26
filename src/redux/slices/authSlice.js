// src/store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Пример async thunk для логина — замените fetch на ваш API
export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include' // если используете cookie
            });
            if (!res.ok) {
                const err = await res.json();
                return rejectWithValue(err);
            }
            const data = await res.json();
            // Ожидаем { token, user } или аналог
            return data;
        } catch (err) {
            return rejectWithValue({ message: err.message || 'Network error' });
        }
    }
);

const initialState = {
    user: null,
    token: null,
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.status = 'idle';
            state.error = null;
        },
        setCredentials(state, action) {
            const { user, token } = action.payload;
            state.user = user ?? state.user;
            state.token = token ?? state.token;
            state.isAuthenticated = Boolean(token);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user ?? null;
                state.token = action.payload.token ?? null;
                state.isAuthenticated = Boolean(action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload?.message || action.error?.message;
            });
    }
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;

// Селекторы
export const selectAuth = state => state.auth;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectAuthToken = state => state.auth.token;
export const selectAuthUser = state => state.auth.user;
