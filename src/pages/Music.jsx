import React from 'react';
import { collection } from "firebase/firestore";
import { firestore, auth, fbProvider } from "../components/FirebaseApp";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { useAuthUser, useAuthSignInWithPopup } from "@react-query-firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { BsFacebook } from 'react-icons/bs';

function login() {
  signInWithPopup(auth, fbProvider);  
}

function Music() {
  // const ref = collection(firestore, "music_request");
  // const query = useFirestoreQuery(["music_request"], ref);
  const fb_user = useAuthUser(["user"], auth);

  if (fb_user.isLoading) {
    return <div>Loading...</div>;
  }


  if (fb_user.data) {
    return <div>Welcome {fb_user.data.displayName}!</div>;
  }

  return (<div>
    <div>Not signed in.</div>
    <button type="button" onClick={login} className='flex items-center justify-center w-32 
    px-4 py-5 m-2 text-sm text-center bg-blue-500 text-white transition-colors
    duration-200 transform border rounded-lg
    hover:bg-blue-700'>
      <span className='inline-flex align-items-center text-sm text-white'><BsFacebook /> Loginbutton</span>
      </button>
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