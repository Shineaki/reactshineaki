import React, { useEffect } from 'react';
import { Button } from '../components';
import { earningData } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';
import { useAnalyticsLogEvent } from "@react-query-firebase/analytics";
import { analytics } from "../components/FirebaseApp";

function Home(){
  return (
    <div className="mt-24">
      <div className="flex flex-wrap justify-center">
        <div className="bg-white h-44 rounded-xl w-full lg:w-5/6 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center bg-gradient-to-r from-sky-50 to-blue-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px" />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-4 items-center'>
        {earningData.map((item) => (
          <div key={item.title}
            className="bg-white md:w-56 p-4 pt-9 rounded-2xl">
            <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
              {item.icon}
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
            </p>
            <p className='text-sm text-gray-400 mt-1'>
              {item.title}
            </p>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Home