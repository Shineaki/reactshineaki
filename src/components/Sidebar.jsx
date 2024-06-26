import React from 'react'

import { Link, NavLink } from 'react-router-dom';
import { GiSelfLove } from 'react-icons/gi';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const { screenSize } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 m-2 bg-wed-icon-font/50 text-white';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 hover:bg-wed-icon-font/20 m-2 text-white';

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className='ml-3 h-screen overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div>
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-5 mt-6 flex text-xl font-extrabold tracking-tight text-slate-200">
              <GiSelfLove /><span>Domi + Ádám</span>
            </Link>
          </div>
          <div className='mt-8'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-slate-300 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.url}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className='capitalize text-slate-200'>
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>)}
    </div>
  )
}

export default Sidebar