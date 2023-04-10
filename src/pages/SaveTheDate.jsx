import React from 'react';
import domiadam_1 from '../data/1.png';
// import domiadam_2 from '../data/2.png';
// import domiadam_3 from '../data/3.png';

function SaveTheDate(){
  return (
    <div className='flex flex-col xl:flex-row justify-center items-center mt-10'>
      <div className='flex basis-1/2 text-center m-5 p-10'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi est fugiat suscipit. Ipsum autem quas, porro esse velit ipsa numquam illum explicabo odit labore, doloremque et consectetur dicta tempore alias!
      </div>
      <div className='flex basis-1/2 justify-center m-5'>
        <img src={domiadam_1} className='w-500' alt='AdamDomi_1'/>
      </div>
    </div>
  )
}

export default SaveTheDate