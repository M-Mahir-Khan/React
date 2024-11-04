import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    :[]
  },
  reducers: {
    addToPastes:  (state, action) => {
      const paste = action.payload
      state.pastes.push(paste)
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Creater Successfully")
    },
    updateToPastes:  (state, action) => {

    },
    resetAllPastes: (state, action) => {

    },
    removeFromPastes: (state, action) =>{

    }
  }
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer