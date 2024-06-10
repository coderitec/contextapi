"use client"
import { stringify } from 'postcss';
import React, { createContext, useEffect, useState } from 'react'

const SideBarContext = createContext()

const SidebarProvider = ({children}) => {
  
  const [val, setVal] = useState(() => {
    const savedVal = localStorage.getItem('Item num')
    return savedVal !== null ? parseInt(savedVal, 10) : 0
  });
    const [navOpen, setNavOpen] = useState(false)
    const [inputVal, setInputVal] = useState(1)
    const [cartItems, setCartItems] = useState(() => {
      const savedCart = localStorage.getItem('Saved Cart')
      return savedCart !== null ? JSON.parse(savedCart) : []
    });
    const [openCart, setOpenCart] = useState(false)


    useEffect(() => {
      localStorage.setItem('Item num', val)
    },[val])

    useEffect(() => {
      localStorage.setItem('Saved Cart', JSON.stringify(cartItems))
    },[cartItems])

  return (
    <div>
        <SideBarContext.Provider value={{navOpen,setNavOpen,val,setVal,inputVal, setInputVal, openCart, setOpenCart,cartItems, setCartItems}}>
        {children}
        </SideBarContext.Provider>
    </div>
  )
}

export  {SideBarContext, SidebarProvider}