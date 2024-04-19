import React from 'react';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "../components/FirebaseApp";

function Music() {
  const [musicList, setMusicList] = useState([]);

  async function queryData() {
    const querySnapshot = await getDocs(query(collection(firestore, "music_request"), orderBy("timestamp", "desc")));
    var elements_processed = 0;
    var tmp_music_list = []

    querySnapshot.forEach((value) => {
      const songData = value.data();
      console.log(`${value.id} => ${songData.title} - ${songData.thumbnail}`);
      tmp_music_list.push({
        title: songData.title,
        thumbnail: songData.thumbnail,
        id: value.id
      });
      elements_processed++;
      console.log(elements_processed + " - " + querySnapshot.docs.length);
      console.log(tmp_music_list);
      if (elements_processed === querySnapshot.docs.length) {
        setMusicList(tmp_music_list);
      }
    })

  }

  useEffect(() => {
    if (musicList.length > 0) {
      console.log("Data already fetched");
      return;
    }
    console.log("Querying data");
    queryData();

  }, [musicList])

  return (
    <div className='flex flex-col my-10 items-center w-full'>
      <div className='text-2xl font-bold'>
        Zenedoboz
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 m-5'>
        {musicList.map((value, index) => (
          <a key={index} className='flex items-center gap-3 cursor-pointer border border-logo-font/70' href={'https://www.youtube.com/watch?v=' + value.id}>
            <img src={value.thumbnail} alt={value.title} className='shadow-lg' />
            <div>{value.title}</div>
          </a>
        ))
        }
      </div>
    </div>
  );

}

export default Music