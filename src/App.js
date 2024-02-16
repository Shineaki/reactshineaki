import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar, Sidebar } from './components';
import {
  SaveTheDate,
  Music, Galery, Schedule, Responses, Service
} from './pages';
import './App.css';
import save_the_date_image from './data/save_the_date.png';
import { FcGoogle } from 'react-icons/fc';
import { useStateContext } from './contexts/ContextProvider';
import { auth, googleAuthProvider } from "./components/FirebaseApp";
import { signInWithPopup } from "firebase/auth";
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import Seating from './pages/Seating';



function App() {
  const queryClient = new QueryClient();
  const { token, setToken, activeMenu } = useStateContext();
  
  useEffect(() => {
    const tokenString = sessionStorage.getItem('token');
    if (tokenString != null){
      const userToken = JSON.parse(tokenString);
      var decoded = jwt_decode(userToken);
      setToken(decoded);
    }
  }, [setToken])

  function storeToken(user) {
    user.getIdToken().then((result) => {
      sessionStorage.setItem('token', JSON.stringify(result));
      var decoded = jwt_decode(result);
      setToken(decoded);
    })
  }

  if (token == null) {
    return (<div>
      <div className='flex flex-col items-center p-10'>
        <div className='flex w-full xl:w-3/4 justify-center'>
          <img src={save_the_date_image} className='' alt='' />
        </div>
        <div className='flex w-full xl:w-3/4 justify-center'>
          <button type="button" onClick={() => {
            signInWithPopup(auth, googleAuthProvider).then((result) => {
              console.log(result.user);
              storeToken(result.user);
            });
          }} className='flex items-center justify-center w-48 
    p-3 m-2  text-center bg-gray-50 transition-colors
    duration-200 transform border rounded-lg
    hover:bg-gray-200 drop-shadow-md'>
            <span className='flex items-center p-1'><FcGoogle className='mr-3 text-2xl' /> Bejelentkezés</span>
          </button>
        </div>
      </div>
    </div>)
  }



  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <div className='flex relative'>
            <div className={`fixed sidebar bg-white ${activeMenu ? 'w-64' : 'w-0'}`}>
              <Sidebar />
            </div>
            <div className={`bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-64' : 'flex-2'}`}>
              <div className='bg-main-bg navbar w-full'>
                <Navbar />
              </div>
              <div>
                <Routes>
                  {/* Dashboard */}
                  <Route path="/" element={<SaveTheDate />} />
                  <Route path="/savethedate" element={<SaveTheDate />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/response" element={<Responses />} />
                  <Route path="/seating" element={<Seating />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/galery" element={<Galery />} />

                  <Route path="/service" element={<Service />} />
                  {/* Eskuvo */}
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter >
      </div>
    </QueryClientProvider>
  )
}

export default App