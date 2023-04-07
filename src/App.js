import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar, Sidebar } from './components';
import {
  BucsuInfo, SaveTheDate,
  Music, Photos, Schedule
} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
const queryClient = new QueryClient();
function App() {
  const { activeMenu } = useStateContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <div className='flex relative'>
            <div className={`fixed sidebar bg-white ${activeMenu ? 'w-72' : 'w-0'}`}>
              <Sidebar />
            </div>
            <div className={`bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
              <div className='fixed md:static bg-main-bg navbar w-full'>
                <Navbar />
              </div>
              <div>
                <Routes>
                  {/* Dashboard */}
                  <Route path="/" element={<SaveTheDate />} />
                  <Route path="/savethedate" element={<SaveTheDate />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/photos" element={<Photos />} />

                  <Route path="/bucsu" element={<BucsuInfo />} />
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