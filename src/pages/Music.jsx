import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { collection, getDocs, doc, getDoc, setDoc, query, orderBy } from "firebase/firestore";
import { firestore } from "../components/FirebaseApp";
import getYouTubeID from 'get-youtube-id';

function Music() {
  const textRef = useRef();
  const [musicList, setMusicList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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

  function addData() {
    console.log(textRef.current.value);
    var id = getYouTubeID(textRef.current.value);
    if (id) {
      textRef.current.value = ''
    } else {
      setErrorMessage("Nem sikerült értelmezni a linket! 😔");
      return;
    }
    const api_key = "AIzaSyC7e4ATB8VDSafEQf-AeQIbuOJWhWZjxSQ";
    const video_id = id;
    axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + video_id + "&key=" + api_key).then((result) => {
      console.log(result.data.items[0].snippet.thumbnails.default.url);
      console.log(result.data.items[0].snippet.title);
      const docRef = doc(firestore, "music_request", video_id);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setErrorMessage("Ezt a zenét már valaki hozzáadta! 😀");
    } else {
          setDoc(doc(firestore, "music_request", video_id), {
            title: result.data.items[0].snippet.title,
            thumbnail: result.data.items[0].snippet.thumbnails.default.url,
            timestamp: Date.now()
          }).then(() => {
            queryData();
          });
        }
      });

    })
  }

  if (musicList.length === 0) {
    return (
      <div>
        Fetching Data ...
      </div>
    )
  }

  return (
    <div className='flex flex-col my-10 items-center w-full'>
      <div className='text-2xl font-bold'>
        Zenedoboz
      </div>
      <div className='my-2 text-center'>
        Dobálj be ide zenéket (Youtube linket!) amikre szívesen ropnád éjfél után 🕺💃
      </div>
      <input ref={textRef} placeholder='https://www.youtube.com/watch?v=9HDEHj2yzew' className='w-4/5 xl:w-1/3 px-3 py-1 border rounded-xl my-2' />
      {errorMessage && (
        <div className='w-4/5 xl:w-1/3 px-3 py-1 border rounded-xl bg-red-200 border-red-300 text-center shadow-md'>
          {errorMessage}
        </div>
      )}
      <button className='w-4/5 xl:w-1/3  border rounded-xl p-2 mt-2 border-logo-font/70 bg-wed-icon-font/70 shadow-md' onClick={() => addData()}>Hozzáadás!</button>
      <div className='grid grid-cols-1 xl:grid-cols-3  m-10'>
        {musicList.map((value, index) => (
          <div key={index} className='flex items-center gap-3 my-3'>
            <img src={value.thumbnail} alt={value.title} className='shadow-lg'/>
            <div>{value.title}</div>
          </div>
        ))
        }
      </div>
    </div>
  );

}

export default Music