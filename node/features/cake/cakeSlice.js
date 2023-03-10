const { iceCreamActions } = require('../icecream/icecreamSlice')

//the entire application state is divided into slices and managed individually
const createSlice=require('@reduxjs/toolkit').createSlice
const initialState={
    numOfCakes:10,
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        //individual state transitions
        /*createSlice will automatically generate action creators
          with the same name as the reducers functions  */
        //it also returns the main reducer function which we can provide to the redux store
        ordered:(state)=>{
            //we don't have to explicitly return the new state
            //we can directly mutate the state
            state.numOfCakes--
        },
        restocked:(state,action)=>{
            state.numOfCakes+=action.payload
        }    
    },
    //by default reducers from one createSlice will only respond to the action types generated by the same slice
    //if you want a slice to respond to other action types 
    //then we have to use extra-reducers

    // //this is one way
    // extraReducers:{
    //     ['ice-cream/ordered']:(state,action)=>{
    //         state.numOfCakes--
    //     }
    // }

    //this is the recommended way
    extraReducers:(builder)=>{
        builder.addCase(iceCreamActions.ordered,(state,action)=>{
            state.numOfCakes--
        })
    }
})
module.exports=cakeSlice.reducer//default export
module.exports.cakeActions=cakeSlice.actions//named export

//cake slice is handling
//action type constants
//action objects
//action creators
//switch statements
//state updation(immer)
//automatically