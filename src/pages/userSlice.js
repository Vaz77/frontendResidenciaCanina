import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "Client",
  initialState: {
    credentials: {
      token: "",
    },
    data: {
      name: "",
      role: "2",
    },
  },
  reducers: {
    login: (state, action) => {
      let { payload } = action;
      console.log("Login - Token:", payload.token);
      console.log("Login - Role:", payload.role);
      console.log("Login - Name:", payload.name);
      state.credentials.token = payload.token;
      state.data.name = payload.name;
      state.data.role = payload.role;
    },
    logout: (state) => {
      return {
        ...state,
        credentials: {
          token: "",
        },
        data: {
          name: "",
          role: "",
        },
      };
    },
    register: (state, action) => {
      let { payload } = action;
      state.credentials.token = payload.token;
      state.data.name = payload.name;
      state.data.role = payload.role;
    },
    setToken: (state, action) => {
      state.credentials.token = action.payload;
    },
  },
});

export const userData = (state) => state.user;
export const { login, logout, register, setToken } = userSlice.actions;
export default userSlice.reducer;
