import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchresults, setsearchdata } from '../features/bookReducer';

const Booklibrary = () => {

    const dispatch=useDispatch();
    const [loading,setloading]=useState(true);
    const searchbook=useSelector(state=>state.book.searchbook);
    const books=useSelector(state=>state.book.books);
  
    useEffect(()=>{
      const fetchdata=async()=>{
        try{
          setloading(true);
          const response=await fetch(`https://openlibrary.org/search.json?q=${searchbook}&limit=10&page=1`);
          const data=await response.json();
          console.log("useeffect called");
          dispatch(fetchresults(data.docs));
          setloading(false);
        }catch(error)
        {
          console.log(error);
          setloading(false);
        }
      }
      if(searchbook!=="")
        fetchdata();
    },[searchbook,dispatch]);
  
 

    const [searchbooks,setsearchbooks]=useState("");
    
    const changeHandler=(e)=>{
        const value=e.target.value;
        setsearchbooks(value);

    }

    const clickhandler=(e)=>{
        e.preventDefault();
        dispatch(setsearchdata(searchbooks));
        setsearchbooks("");
    }

    if(loading)
        return( 
        <div className=" w-screen h-screen  bg-slate-200 flex items-center justify-center">
            <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-red-600"></div>
        </div>
        )

  return (
    <div className='bg-slate-100 max-w-screen min-h-screen pt-24 flex flex-col gap-10 pb-8 px-4'>
        <form className='lg:flex  items-center justify-center w-[40vw] mx-auto' onSubmit={(e)=>clickhandler(e)}>
            <input type='text'placeholder='Search Books Here' className=' outline-none py-2 px-5 shadow-md rounded-s-full w-2/3 border' onChange={(e)=>changeHandler(e)} value={searchbooks}></input>
            <button className='  rounded-e-full bg-red-700 py-3 px-7 text-white  shadow-md hover:bg-red-900'>
            <FaSearch />
            </button>
        </form>
        <div className='flex items-center justify-center'>
        <div className=' grid grid-cols-3 gap-10'>
        {
            books.length>0 ? (
            books?.map((book,index)=>(
                <Card key={index} book={book}></Card>
            ))):(
                <div className='text-center  text-2xl col-span-3 text-red-500'>
                  No books found.
                </div>
            )
        }
        </div>
        </div>
    </div>
  )
}

export default Booklibrary