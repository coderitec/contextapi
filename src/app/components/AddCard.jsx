"use client"
import React, { useContext, useState } from 'react'
import { SideBarContext } from '../providers'

export default function AddCard({title,amount}) {
    const {val,setVal,inputVal, setInputVal,cartItems, setCartItems} = useContext(SideBarContext)
    const [itemName, setItemName] = useState(title)
    

    function changeValType(e){
        setInputVal(Number(e.target.value))
    }

    
    function handleAddItemsToCart(){
      setVal(prev => prev + inputVal)

      const itemIndex = cartItems.findIndex(item => item.title === itemName)
      let newCartItems

      if(itemIndex !== -1){
        newCartItems = cartItems.map((item,index) => index === itemIndex ? {...item, count: item.count + inputVal, amount: item.amount + (inputVal * amount)} : item)
      }
      else{

        newCartItems = [...cartItems, {title: title, count:inputVal, amount: inputVal * amount}]
      }

      setCartItems(newCartItems)
    }

  return (
    <div className='flex items-center justify-center space-x-2 sm:w-full w-1/2'>
        <input type="number" name="num" id="num" min='1' max='5' 
        className='sm:w-1/4 w-2/5 rounded-full p-3 text-slate-900'
        defaultValue={inputVal} 
        onChange={changeValType}/>

        <button className='rounded-full bg-slate-900 text-white p-3 sm:w-1/3 w-3/5'
        onClick={handleAddItemsToCart}>Add Card</button>
    </div>
  )
}
