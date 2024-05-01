import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const {user,token,loading}=useSelector(state=>state)

  return (
    <div>
        <h1>{user.fullName}</h1>
    </div>
  )
}

export default Profile