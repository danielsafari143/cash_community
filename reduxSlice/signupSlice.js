import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    account : {
        name:'' , 
        email:'',
        password:''
    },
    user : {
        isLogin : false,
        info : []},
    accountInfo : [],
    isLoading : false,
    sign : false
};

const api = 'https://cash-community.onrender.com/'
export const fetchData = createAsyncThunk('data/fetchData' , async () => {
    try {
        const data = fetch(api);
        await data.then(response => response.json());
        return JSON.stringify(data);
    } catch (error) {
        console.log(error);
    }
})

export const createUser = createAsyncThunk('create/createUser' , async (arg) => {
    try {
        const {name , email , password} = arg;
        const data = await axios.post(`${api}users/register`,
        JSON.stringify({name : name , email : email , password : password}),
        {headers: {"Content-Type": "application/json"}},)
        return data.status;
    } catch (error) {
        console.log(error)
    }
})

export const userLogin = createAsyncThunk('user/userLogin' , async (arg) => {
    try {
        const {email , password} = arg;
        const data = await axios.post(`${api}users/login`,
        JSON.stringify({email : email , password : password}),
        {headers: {"Content-Type": "application/json"}},)
        return data.data;
    } catch (error) {
        console.log(error)
    }
})

const accountSlice = createSlice({
    name : 'account',
    initialState,
    reducers:{
        signup : (state , action) => {
            state.account = action.payload;
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
    },
    extraReducers:(builder) => {
        builder.addCase(fetchData.fulfilled , (state , action) => {
            state.isLoading = true
        });
        builder.addCase(createUser.fulfilled , (state , action) => {
          if(action.payload === 200){
            state.sign = true
          };
        })
        builder.addCase(userLogin.fulfilled , (state , action) => {
           if(action.payload){
            state.user.isLogin = true; 
            const {id , name , jwt} = action.payload;
            state.user.info.push({id , name , jwt})       
           }    
        })
    }
});

export const {signup , setAccount} = accountSlice.actions;
export default accountSlice.reducer;