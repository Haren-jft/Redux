import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from './cakeSlice';
const CakeView = () => {
    const cakes=useSelector((state)=>state.cake.numOfCakes);
    const dispatch=useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {cakes}</h2>
            <button onClick={()=>dispatch(ordered())}>Order cake</button>
            <button onClick={()=>dispatch(restocked(1))}>Restock cake</button>
        </div>
    )
}

export default CakeView