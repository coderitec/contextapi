# React Shopping Cart Application

This is a simple shopping cart application built with React. It demonstrates the use of `useContext`, `useEffect`, `useState`, and `localStorage` for state management and persistence.

## Features

- Add items to the cart
- Remove items from the cart
- Persist cart items in `localStorage`
- Display total items and total price

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Providers](#providers)
- [Hooks](#hooks)
- [Local Storage](#local-storage)
- [Contributing](#contributing)
- [License](#license)

## [Installation](#installation)

1. Clone the repository

   ```
   git clone https://github.com/coderitec/contextapi.git
   ```

2. Navigate to the project directory

   ```
   cd contextapi
   ```

## [Usage](#usage)

1. Start the development server

   ```
   npm run dev
   ```

2. Open your browser and go to `http://localhost:3000`

## [Components](#components)

### AddCart

Displays the input element and the button to add to cart

### Cart

Displays the items in the cart, along with the total number of items and the total price. Allows users to remove items from the cart.

### Cards

Each content of the item displayed on the home page

### Navbar

Displays the navigation menu

### [Providers](#providers)

Contains the hoooks managed globally using context api

```
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
```

## Hooks

### useState

Used to manage local state within components, such as the list of products.

### useEffect

Used to perform side effects, such as loading the cart items from `localStorage` when the component mounts.

### useContext

Used to access the cart state and dispatch methods from `CartContext`.

## Local Storage

### Saving Cart to Local Storage

The cart items are saved to `localStorage` whenever the cart state changes.

```
    useEffect(() => {
      localStorage.setItem('Item num', val)
    },[val])

    useEffect(() => {
      localStorage.setItem('Saved Cart', JSON.stringify(cartItems))
    },[cartItems])

```

### Loading Cart from Local Storage

The cart items are loaded from `localStorage` when the application initializes.

```
  const [cartItems, setCartItems] = useState(() => {
      const savedCart = localStorage.getItem('Saved Cart')
      return savedCart !== null ? JSON.parse(savedCart) : []
    });
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
