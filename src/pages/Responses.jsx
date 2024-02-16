import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

function Responses(){
  const { user } = useStateContext();
    if (user != null)
    {
      return <div>{user.displayName}</div>
    }
  return (
    <div>Responses</div>
  )
}

export default Responses