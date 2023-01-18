import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect} from 'react';
import { useDispatch } from 'react-redux'

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { setUser } = authSlice.actions;

export const useGetUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/auth/login/success", {
          withCredentials: true,
        });
        dispatch(setUser(data.user));
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [dispatch]);
}

export default authSlice.reducer;