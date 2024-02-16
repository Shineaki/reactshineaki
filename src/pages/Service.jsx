import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

function Service(){
  const { user } = useStateContext();
    if (user != null)
    {
      return <div>{user.displayName}</div>
    }
  return (
    <div>Service</div>
  )
}

export default Service