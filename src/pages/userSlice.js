import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "Client",
  initialState: {
    credentials: {
      token: "",
    },
    data: {
      name: "",
      roleId: "2",
      email: "",
      userDni: "",
    },
  },
  reducers: {
    login: (state, action) => {
      let { payload } = action;
      state.data.email = payload.email;
      state.credentials.token = payload.token;
      state.data.name = payload.name;
      state.data.roleId = payload.roleId;
      state.data.dni = payload.dni;
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
