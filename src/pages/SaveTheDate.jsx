import React from 'react';
import save_the_date_image from '../data/save_the_date_2.png';
// import domiadam_2 from '../data/2.png';
// import domiadam_3 from '../data/3.png';

function SaveTheDate(){
  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full justify-center mb-5'>
        <img src={save_the_date_image} className='w-3/4 md:w-2/5' alt=''/>
      </div>
      <div className='flex w-full md:w-2/3  text-center'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi est fugiat suscipit. Ipsum autem quas, porro esse velit ipsa numquam illum explicabo odit labore, doloremque et consectetur dicta tempore alias!
      </div>
    </div>
  )
}

export default SaveTheDate