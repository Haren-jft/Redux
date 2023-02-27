import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
/*redux-toolkit provides createAsyncThunk which helps in 
creation and dispatching of async actions*/
import axios from 'axios'
//the func has 2 parameters
//1st=action type
//2nd=async action i.e
//callback that returns a promise that can be in any 3 states ,pending,fulfilled and rejected
//creatwAsyncThunk automatically Generates pending,fulfilled and rejected action types
export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
   return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.data)
})
const userSlice=createSlice({
    name:'user',
    initialState:{
        loadding:false,
        users:[],
        err:'',
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loadding=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loadding=false
            state.users=action.payload
            state.err=''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loadding=false
            state.users=[]
            state.err=action.error.message
        })
    }
        
})
export default userSlice.reducer