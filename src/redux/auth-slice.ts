import { createSelector, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { IFormInput } from '../types/Interfaces';
import { RootState } from './store';

/* LoginInfo 타입 */
interface LoginInfo {
  isAuthenticated: boolean;
  accessToken: string | null;
  email: string | null;
  name: string | null;
  phone: string | null;
  loginError: string | null;
}

/* 초기 값 */
const initialState: LoginInfo = {
  isAuthenticated: false,
  accessToken: null,
  email: null,
  name: null,
  phone: null,
  loginError: null
};

const authSlice: Slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<IFormInput>) {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.loginError = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.email = null;
      state.name = null;
      state.phone = null;
      state.loginError = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.loginError = action.payload;
    }
  }
});

export const selectAuthState = (state: RootState) => state.auth;
export const selectUserInfo = createSelector([selectAuthState], (auth) => ({
  isAuthenticated: auth.isAuthenticated,
  accessToken: auth.accessToken,
  email: auth.email,
  name: auth.name,
  phone: auth.phone
}));

export const { loginSuccess, logout, loginFailure } = authSlice.actions;

export default authSlice.reducer;
