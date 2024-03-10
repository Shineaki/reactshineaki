import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar, Sidebar } from './components';
import {
  SaveTheDate,
  Music, Galery, Schedule, Responses, Service
} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import Seating from './pages/Seating';



function App() {
  const queryClient = new QueryClient();
  const { activeMenu } = useStateContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <div className='flex relative'>
            <div className={`fixed sidebar bg-wed-icon-font/70 ${activeMenu ? 'w-64' : 'w-0'}`}>
              <Sidebar />
            </div>
            <div className={`bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-64' : 'flex-2'}`}>
              <div className='bg-wed-icon-font navbar w-full'>
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