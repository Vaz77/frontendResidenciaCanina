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
      id: "",
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
      state.data.id = payload.id
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
    setUserProfile: (state, action) => {
      const userProfileData = action.payload;
      state.data.name = userProfileData.name;
      state.data.email = userProfileData.email;
    },
  },
});

export const userData = (state) => state.user;
export const { login, logout, register, setToken, setUserProfile } = userSlice.actions;
export default userSlice.reducer;
