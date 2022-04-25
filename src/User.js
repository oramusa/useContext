import React, {useContext} from 'react'
import {AppContext} from './App';

function User() {
  const {userName} =useContext(AppContext);
  return (
    <div>User: {userName}</div>
  )
}

export default User
