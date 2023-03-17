import React from 'react'

import { Link, NavLink } from 'react-router-dom';
import { GiSelfLove } from 'react-icons/gi';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { screenSize } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 m-2 bg-sky-100';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen overflow-auto md:hover:overflow-auto pb-10'>
          <Link to="/" className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <GiSelfLove /><span>Ádám és Domi</span>
          </Link>
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className='capitalize'>
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
    </div>
  )
}

export default Sidebar