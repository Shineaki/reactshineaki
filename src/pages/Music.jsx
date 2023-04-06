import React from 'react'
import { collection } from "firebase/firestore";
import { firestore } from "../components/FirebaseApp";
import { useFirestoreQuery } from "@react-query-firebase/firestore";


function Music() {
  const ref = collection(firestore, "music_request");
  const query = useFirestoreQuery(["music_request"], ref);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  const snapshot = query.data;

  return snapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data();

    return <div>{data.id} - {data.title}</div>;
  });
}

export default Music