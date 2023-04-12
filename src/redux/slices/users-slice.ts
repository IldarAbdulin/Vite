import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllUsers = createAsyncThunk<IUsers[]>(
  'getAllUsers',
  async function () {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return data;
  }
);

export const getUserById = createAsyncThunk<IUsers, string | undefined>(
  'getUserById',
  async function (id) {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return data;
  }
);

type IUsers = {
  id?: number;
  name?: string;
  email?: string;
  website?: string;
};

export type IUser = {
  user: IUsers;
};

type initialStateTypes = {
  users: IUsers[];
  user: IUsers;
  loading: boolean;
  error: null | string;
};

const initialState: initialStateTypes = {
  users: [],
  user: {},
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getUserById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, acttion) => {
      state.error = `${acttion.error.message}`;
      state.loading = false;
    });
  },
});
