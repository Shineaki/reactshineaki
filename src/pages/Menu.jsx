import React from 'react'

function Menu() {
  return (
    <div className='flex flex-col items-center p-10 montserrat'>
      <div className='w-full xl:w-1/2'>

        <div className='text-4xl font-bolt p-5 text-center'>Vendégváró Falatok 🥨</div>
        <ul className='list-disc list-inside'>
          <li>Tenkes sajtos rúdacskák</li>
          <li>Céklafasírt golyócskák, zöldborsópüré ágyon, karamellizált répával</li>
        </ul>
        <div className='text-4xl font-bolt p-5 text-center'>Leves 🍜</div>
        <ul className='list-disc list-inside'>
          <li>Friss, szezonális zöldségekből készült leves (vegán)</li>
        </ul>
        <div className='text-4xl font-bolt p-5 text-center'>Főételek 🥗</div>
        <ul className='list-disc list-inside'>
          <li>BBQ zöldség nyársak</li>
          <li>Tavaszi quinoa saláta zöldséggolyókkal, brokkolis hajdinás rétes, parmezános borsos dresszinggel</li>
          <li>Roston sült jércemell, brokkoli textúrák, humusz ágyon</li>
        </ul>
        <div className='text-4xl font-bolt p-5 text-center'>Sültek fatálakon 🍖</div>
        <ul className='list-disc list-inside'>
          <li>Ropogós tanyasi kacsacombok gondosan sütve, köményes, karamellás, házi balzsamecetes, szilvás párolt lilakáposztával</li>
          <li>Cigánypecsenye, az örök kedvenc, hagyományosan roston sütve, sertés tarjából, szalonna szafttal, füstölt házi kenyérszalonna taréjjal, meglehetősen fokhagymásan</li>
          <li>Házi sajttal- füstölt sonkával, petrezselyem krémmel töltött csirkemell</li>
        </ul>
        <div className='text-4xl font-bolt p-5 text-center'>Köretek 🍟</div>
        <ul className='list-disc list-inside'>
          <li>Petrezselymes burgonya</li>
          <li>Bulgur</li>
          <li>Párolt jázmin rizs</li>
          <li>Grill zöldségek</li>
          <li>Házi hordós savanyúság, friss kevert saláta</li>
        </ul>
        <div className='text-4xl font-bolt p-5 text-center'>Éjféli Menü 🌙</div>
        <ul className='list-disc list-inside'>
          <li>Töltött káposzta, avagy az igazi szármánt - Tejföllel és fehér kenyérrel</li>
        </ul>
        <div className='text-4xl font-bolt p-5 text-center'>Italok 🥂</div>
        <ul className='list-disc list-inside'>
          <li>Szóda, szénsavmentes ásványvíz</li>
          <li>Házi szörpök</li>
          <li>Happy Day rostos üdítő (Alma, Barack, Narancs)</li>
          <li>Coca-Cola, Coca-cola zero, Fanta narancs, Kinley tonic, Kinley gyömbér</li>
          <li>Pascucci kávé</li>
          <li>A Villányi borvidékről Kovács Pince folyóborai, Olaszrizling, Rosé, Portugieser</li>
          <li>Csapolt Pécsi sör</li>
        </ul>

        <div className='text-4xl font-bolt p-5 text-center'>Röviditalok 🥃</div>
        <ul className='list-disc list-inside'>
          <li>Jim beam whiskey</li>
          <li>Russian Standard Original Vodka</li>
          <li>Jagermeister</li>
          <li>Buldog Gin</li>
          <li>Baileys</li>
          <li>HÁZIPÁLINKÁK (eper, málna, ...)</li>
        </ul>
    </div>
    </div >
  )
}

export default Menu