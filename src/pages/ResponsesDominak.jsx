import React, { useEffect, useState } from 'react'
import { firestore } from '../components/FirebaseApp';
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function ResponsesDominak() {
  const [users, setUsers] = useState([]);
  const [asd, setAsd] = useState(false);

  function abs(stuff){
    if (stuff){
      return 'p-1 bg-green-200';
    } else {
      return 'p-1 bg-red-200'
    }
  }

  useEffect(() => {
    getDocs(query(collection(firestore, "feedback"), orderBy("family"))).then((result) => {
      var tmp_arr = [];
      result.forEach((value) => {
        tmp_arr.push(value.data());
        if (tmp_arr.length === result.size) {
          setUsers(tmp_arr);
          setAsd(true);
        }
      })
    })

  }, [setUsers])

  if (!asd) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <div className='flex flex-col p-1 text-sm'>
      {users.map((val, idx) =>
        <table className='border border-slate-900 my-3 rounded w-full' key={idx} >
          <thead>
            <tr className='items-center'>
              <th className='p-1'>Family</th>
              <th className='p-1'>Name</th>
              {/* <th className='p-1'>Email</th> */}
              {/* <th className='p-1'>Number</th> */}
              <th className='p-1'>KidSeats</th>
              <th className='p-1'>none</th>
              <th className='p-1'>gluten</th>
              <th className='p-1'>milk</th>
              <th className='p-1'>sugar</th>
              <th className='p-1'>vegan</th>
              <th className='p-1'>veget.</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center border-b-1 border-slate-900'>
              <td className='p-1'>{val.family}</td>
              <td className='p-1'>{val.name}</td>
              {/* <td className='p-1'>{val.emailAddress}</td> */}
              {/* <td className='p-1'>{val.mobile}</td> */}
              <td className='p-1'>{val.numOfKidSeats}</td>
            </tr>
            {val.guests.map((value, idxx) =>
              <tr key={idx + "_" + idxx} className='text-center'>
                <td className='p-1'>{val.family}</td>
                <td className='p-1'>{value.guestName}</td>
                {/* <td className='p-1'></td> */}
                {/* <td className='p-1'></td> */}
                <td className='p-1'></td>
                <td className={abs(value.none)}>{value.none.toString()}</td>
                <td className={abs(value.glutenFree)}>{value.glutenFree.toString()}</td>
                <td className={abs(value.milkFree)}>{value.milkFree.toString()}</td>
                <td className={abs(value.sugarFree)}>{value.sugarFree.toString()}</td>
                <td className={abs(value.vegan)}>{value.vegan.toString()}</td>
                <td className={abs(value.vegetarian)}>{value.vegetarian.toString()}</td>
              </tr>
            )}
          </tbody>
        </table >
      )
      }
    </div>
  )


}

export default ResponsesDominak