import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
  const location=useLocation();
  console.log(location);
  return (
    <div className=' bg-slate-300 flex w-screen h-20 px-10 items-center mx-auto justify-between fixed shadow-slate-500 shadow-sm'>
        <Link  to={"/"} className=' font-semibold text-4xl'>
            Book Library
        </Link>
        {
          location.pathname==="/"?
          (<Link to={"/bookshelf"} className=' bg-red-700 rounded-md text-white px-4 py-2 hover:bg-red-900 hover:cursor-pointer'>
            Go to Bookshelf
          </Link>):(<Link to={"/"} className=' bg-red-700 rounded-md text-white px-4 py-2 hover:bg-red-900 hover:cursor-pointer'>
            Go to BookLibrary
        </Link>)
        }
        
    </div>
  )
}

export default Navbar