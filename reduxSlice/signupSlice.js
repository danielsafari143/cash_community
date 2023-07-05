import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account : {
        name:'' , 
        email:'',
        password:''
    }
};

const accountSlice = createSlice({
    name : 'account',
    initialState,
    reducers:{
        signup : (state , action) => {
            state.account = action.payload;
            console.log(state.account)
        }
    }
});

export const {signup} = accountSlice.actions;
export default accountSlice.reducer;