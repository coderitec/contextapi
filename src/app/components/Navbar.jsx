"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { SideBarContext } from '../providers'
import Cart from './Cart'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";



export default function Navbar() {
    const {val,navOpen,setNavOpen} = useContext(SideBarContext)
    const {openCart,setOpenCart} = useContext(SideBarContext)

    function handleCartOpen(){
      setOpenCart(!openCart)
    }

    function handleNav(){
      setNavOpen(!navOpen)
    }

  return (
    <nav className='text-white bg-slate-900'>
        <ul className='hidden sm:flex flex-row justify-between px-16 py-12'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/about'>About Us</Link></li>
            <li onClick={handleCartOpen} className='cursor-pointer'>Cart ({val})</li>
            {openCart && <Cart/>}
        </ul>
        <ul className='sm:hidden flex flex-row justify-between px-16 py-12'>
            <li><Link href='/'>Home</Link></li>
            {
              !navOpen ?

              <li className='cursor-pointer' onClick={handleNav}><GiHamburgerMenu/></li> :
            <li className='cursor-pointer' onClick={handleNav}><MdCancel/></li>
            }
         </ul> 
         { navOpen &&

           <ul className='sm:hidden flex flex-col min-h-80 items-end justify-between px-16 py-12 '>   
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/about'>About Us</Link></li>
            <li onClick={handleCartOpen} className='cursor-pointer'>Cart ({val})</li>
            {openCart && <Cart/>}
        </ul>
        }
    </nav>
  )
}
