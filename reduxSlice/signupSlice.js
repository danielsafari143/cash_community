import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account : {
        name:'' , 
        email:'',
        password:''
    },
    accountInfo : []
};

const accountSlice = createSlice({
    name : 'account',
    initialState,
    reducers:{
        signup : (state , action) => {
            state.account = action.payload;
            console.log(state.account)
        },
        setAccount : (state , action) => {
            state.accountInfo.push(
                {
                    name:action.payload.name,
                    accountType : action.payload.type,
                    balance : 0,
                    income : 0,
                    expenses:0,
                }
            )
        }
    }
});

export const {signup , setAccount} = accountSlice.actions;
export default accountSlice.reducer;