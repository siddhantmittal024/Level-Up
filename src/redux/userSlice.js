import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase/firebase.util';
import { doc, getDoc } from 'firebase/firestore';

const initialState = {
  currentUser: null
};

export const getCurrentUserData = createAsyncThunk('users/getCurrentUser', async(uid) =>{
  const userRef = doc(db, 'users', uid);
  const user = await getDoc(userRef);
  return user.data();
})

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = (action.payload);
    },
    signOut: (state) => {
      state.currentUser = null;
    }
  },
  extraReducers: {
    [getCurrentUserData.fulfilled]: (state, action) => {
      //console.log('ACTION:',action.payload);
      state.currentUser = action.payload;
    }
  }

});
