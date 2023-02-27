import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'
const UserView = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  const user=useSelector((state)=>state.user)
    return (
        <div>
            <h2>List of Users - </h2>
            {user.loading && <div>Loading.....</div>}
            {!user.loading && user.err ? <div>{user.err}</div>:
                user.users.map((user)=>{
                    return <div key={user.id}>
                        {user.name}
                    </div>
                })
            }
        </div>
    )
}

export default UserView