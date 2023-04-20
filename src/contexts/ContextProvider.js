import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [user, setUser] = useState(null);
    const [screenSize, setScreenSize] = useState(undefined);

    return (
        <StateContext.Provider
            value={{ 
                activeMenu, setActiveMenu,
                user, setUser,
                screenSize, setScreenSize
             }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);