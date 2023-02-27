const store=require('./app/store');
const cakeActions=require('./features/cake/cakeSlice').cakeActions
const iceActions=require('./features/icecream/icecreamSlice').iceCreamActions
const fetchUsers=require('./features/user/userSlice').fetchUsers
console.log('Initial state',store.getState())
// const unsub=store.subscribe(()=>{
//     // console.log('Updated State',store.getState())
// })
store.dispatch(fetchUsers())
// store.dispatch(iceActions.ordered())
// store.dispatch(iceActions.ordered())
// store.dispatch(iceActions.ordered())
// store.dispatch(iceActions.ordered())
// store.dispatch(iceActions.restocked(10))
// unsub();