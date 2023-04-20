import React from 'react';
import save_the_date_image from '../data/save_the_date.png';
// import domiadam_2 from '../data/2.png';
// import domiadam_3 from '../data/3.png';

function SaveTheDate(){
  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full xl:w-3/4 justify-center'>
        <img src={save_the_date_image} className='' alt=''/>
      </div>
      <div className='flex w-full xl:w-3/4  text-center p-10'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi est fugiat suscipit. Ipsum autem quas, porro esse velit ipsa numquam illum explicabo odit labore, doloremque et consectetur dicta tempore alias!
      </div>
    </div>
  )
}

export default SaveTheDate