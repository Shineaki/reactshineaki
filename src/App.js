import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar, Sidebar } from './components';
import {
  Home, BucsuInfo, Information,
  Music, Photos, Schedule
} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
const queryClient = new QueryClient();
function App() {
  const { activeMenu } = useStateContext();
  console.log(activeMenu);
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <div className='flex relative'>
            {activeMenu ? (
              <div className='w-72 fixed sidebar bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0'>
                <Sidebar />
              </div>
            )}
            <div className={
              `bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
            }>
              <div className='fixed md:static bg-main-bg navbar w-full'>
                <Navbar />
              </div>
              <div>
                <Routes>
                  {/* Dashboard */}
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/bucsu" element={<BucsuInfo />} />

                  {/* Eskuvo */}
                  <Route path="/information" element={<Information />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/photos" element={<Photos />} />

                  {/* Apps */}
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