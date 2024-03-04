import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

function Responses() {
  const { user } = useStateContext();
  if (user != null) {
    return <div>{user.displayName}</div>
  }
  return (
    <div className='flex flex-col items-center m-10'>
      <div className='text-2xl font-bold p-5'>
        Visszajelzés
      </div>
      <div className='text-center'>
        Ahogy a meghívás során beszéltük, <br />
        családonként egy főt szeretnénk megkérni arra,<br />
        hogy töltse ki az alábbi formot:<br />
        <a href='https://ndominica.typeform.com/to/p8lLJcUY' className='text-blue-600 text-xl font-bold'>
          Kattints ide!
        </a>
      </div>
    </div>
  )
}

export default Responses