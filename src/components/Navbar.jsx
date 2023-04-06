import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <button type="button" onClick={customFunc} style={{ color }}
      className="relative text-xl rounded-full p-3 m-2 hover:bg-slate-200">
      <span style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}
    </button>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    (!activeMenu ? (
    <div className='flex justify-start md:mx-6 relative'>
    <NavButton
      title="Menu"
      customFunc={() => setActiveMenu(!activeMenu)}
      color="blue"
      icon={<AiOutlineMenu />}
    />
  </div>) : (<></>))

  )
}

export default Navbar