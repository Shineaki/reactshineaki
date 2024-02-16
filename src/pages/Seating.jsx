import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

function Seating(){
  const { user } = useStateContext();
    if (user != null)
    {
      return <div>{user.displayName}</div>
    }
  return (
    <div>Seating</div>
  )
}

export default Seating