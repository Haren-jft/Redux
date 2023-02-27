import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from './icecreamSlice';
const IceView = () => {
    const ice=useSelector((state)=>state.ice_cream.numOfIceCreams);
    //it is like a wrapper around store.getState()
    const dispatch=useDispatch()
    //it returns ref to the dispatch functions from the store
    return (
        <div>
            <h2>Number of Ice Creams - {ice}</h2>
            <button onClick={()=>dispatch(ordered())}>Order ice-cream</button>
            <button onClick={()=>dispatch(restocked(1))}>Restock ice-cream</button>
        </div>
    )
}

export default IceView