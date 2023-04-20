import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navbar, Sidebar } from './components';
import {
  BucsuInfo, SaveTheDate,
  Music, Galery, Schedule, Catering, Helyszin, Fotos, Filmes, Ceremoniamester, Zenekar
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
                  <Route path="/music" element={<Music />} />
                  <Route path="/galery" element={<Galery />} />

                  <Route path="/catering" element={<Catering />} />
                  <Route path="/ceremoniamester" element={<Ceremoniamester />} />
                  <Route path="/filmes" element={<Filmes />} />
                  <Route path="/fotos" element={<Fotos />} />
                  <Route path="/helyszin" element={<Helyszin />} />
                  <Route path="/zenekar" element={<Zenekar />} />

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