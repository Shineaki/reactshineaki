import React from 'react';
// import { collection } from "firebase/firestore";
// import { auth, googleAuthProvider } from "../components/FirebaseApp";
// import { signInWithPopup } from "firebase/auth";
// import { useFirestoreQuery } from "@react-query-firebase/firestore";
// import { FcGoogle } from 'react-icons/fc';
// import { useStateContext } from '../contexts/ContextProvider';
// import TextField from '@mui/material/TextField';
// import { DataGrid } from '@mui/x-data-grid';

function Music() {
  // const ref = collection(firestore, "music_request");
  // const query = useFirestoreQuery(["music_request"], ref);
  // const { token } = useStateContext();

  // if (token != null) {
  //   return (<div className='flex flex-col justify-center items-center min-h-screen'>
  //     <div>Szia {token.name}!</div>
      {/* <TextField id="outlined-basic" label="Youtube Link" variant="outlined" style={{ margin: 15 }} /> */}
      {/* <button type="button" onClick={() => {
        signOut(auth).then(() => {
          setToken(null);
        }).catch((error) => {
          // An error happened.
        });
      }} className='flex items-center justify-center w-40 
      p-3 m-2  text-center bg-gray-50 transition-colors
      duration-200 transform border rounded-lg
      hover:bg-gray-200 drop-shadow-md'>
        <span className='flex items-center p-1'><FcGoogle className='mr-3' /> Kijelentkezés</span>
      </button> */}
    {/* </div>);
  } */}

  return (<div>
    <div>Zenedoboz</div>
    {/* <button type="button" onClick={() => {
      signInWithPopup(auth, googleAuthProvider).then((result) => {
        console.log(result.user);
        setToken(result.user);
      });
    }} className='flex items-center justify-center w-40 
    p-3 m-2  text-center bg-gray-50 transition-colors
    duration-200 transform border rounded-lg
    hover:bg-gray-200 drop-shadow-md'>
      <span className='flex items-center p-1'><FcGoogle className='mr-3' /> Bejelentkezés</span>
    </button> */}
  </div>);

  // if (query.isLoading) {
  //   return <div>Loading...</div>;
  // }

  // const snapshot = query.data;

  // return snapshot.docs.map((docSnapshot) => {
  //   const data = docSnapshot.data();

  //   return <div>{data.id} - {data.title}</div>;
  // });
}

export default Music