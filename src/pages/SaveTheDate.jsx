import React from 'react';
import save_the_date_image from '../data/save_the_date_2.png';
// import domiadam_2 from '../data/2.png';
// import domiadam_3 from '../data/3.png';

function SaveTheDate() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full justify-center mb-5'>
        <img src={save_the_date_image} className='w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3' alt=''/>
      </div>
      <div className='flex flex-col w-full md:w-2/3 text-center p-5 montserrat text-lg'>
        <div className='pb-3'>
          Kedves Családunk és Barátaink!
        </div>
        <div className='pb-3'>
          Örömmel tudjatjuk veletek, hogy (újra) kimondjuk a boldogító igent. Ezen apropóból szeretettel várunk benneteket 2024. április 20-án a bogádi Gálffy Birtokon tartandó esküvőnkre.
        </div>
        <div className='pb-3'>
          Részvételi szándékotokat és speciális étkezési igényeteket kérjük, hogy a "Visszejelzés" menüpont alatt jelezzétek!
        </div>
        <div className='mb-5'>
          Alig várjuk, hogy együtt ünnepeljünk Veletek! 🥰
        </div>
      </div>
    </div>
  )
}

export default SaveTheDate