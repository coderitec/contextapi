"use client"
import React, { useContext } from 'react'
import { SideBarContext } from '../providers'
import franc from './cart.module.css'
import { RiDeleteBin2Fill } from "react-icons/ri";


export default function Cart() {
    const {setVal,openCart,setOpenCart, cartItems, setCartItems} = useContext(SideBarContext)
    function handleCartOpen(){
        setOpenCart(!openCart)
      }

      const handleDelete = (index) => {
        const newCartItems = [...cartItems]
        const deleteItem = newCartItems.splice(index, 1)[0]
        setCartItems(newCartItems)
        setVal(prev => prev - deleteItem.count)
      }
  return (
    <div className='w-1/2 h-screen shadow-2xl bg-[#030311fa] text-white py-8 px-6 rounded-l-md absolute right-0 top-20'>
        <div className='flex justify-between items-center text-2xl font-mono'>
            <h3>cart</h3>
            <h3 className='bg-white text-slate-950 shadow-xl rounded-md p-4 cursor-pointer' onClick={handleCartOpen}>close</h3>

        </div>
        { cartItems.length == 0 ?
        <h3 className='text-center py-10 capitalize text-2xl'>cart is empty</h3> :

            <table className={franc.table}>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>value</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>

                {cartItems.map((cart, index) =>(
                    <tr key={index}>
                        <td>{cart.title}</td>
                        <td>{cart.count}</td>
                        <td>&#8358; {cart.amount.toLocaleString()}</td>
                        <td className='cursor-pointer' onClick={()=>handleDelete(index)}><RiDeleteBin2Fill /></td>
                    </tr>
                )
            )}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{[...cartItems.map(item => item.count)].reduce((x,yy)=>x+yy,0).toLocaleString()}</td>
                    <td>&#8358; {[...cartItems.map(item => item.amount)].reduce((x,yy)=>x+yy,0).toLocaleString()}</td>
                </tr>
            </tfoot>
            </table>
        }
    </div>
  )
}
