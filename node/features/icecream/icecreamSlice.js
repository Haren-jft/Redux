const createSlice=require('@reduxjs/toolkit').createSlice
const iceCreamSlice=createSlice({
    name:'ice-cream',
    initialState:{
        numOfIceCreams:10,
    },
    reducers:{
        ordered:(state,action)=>{
            state.numOfIceCreams--
        },
        restocked:(state,action)=>{
            state.numOfIceCreams+=action.payload
        },
    },
})
module.exports=iceCreamSlice.reducer
module.exports.iceCreamActions=iceCreamSlice.actions