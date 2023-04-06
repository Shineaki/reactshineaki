import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Sidebar } from './components';
import {
  Home, BucsuInfo, Calendar, Employees,
  Customers, Kanban, Editor
} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();
  return (
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

                {/* Pages */}
                <Route path="/info" element={<BucsuInfo />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />

                {/* Apps */}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter >
    </div >
  )
}

export default App