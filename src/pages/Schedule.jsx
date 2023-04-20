import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

function Schedule(){
  const { user } = useStateContext();
    if (user != null)
    {
      return <div>{user.displayName}</div>
    }
  return (
    <div>Schedule</div>
  )
}

export default Schedule