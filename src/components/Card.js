import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addbook } from '../features/bookshelfReducer';
import { toast } from 'react-toastify';


const Card = ({book,shelf}) => {
    const dispatch=useDispatch();

    const [added,setadded]=useState(false);

    const clickhandler=()=>{
        if(!added){
        dispatch(addbook(book));
        setadded(true);    
        toast.success("Added to bookshelf");
        }    
    }

  return (
    <div className=' w-[25vw] bg-slate-300 p-8 rounded-md text-center'>
        <div className=' font-semibold text-2xl '>
            {book.title}
        </div>
        <div>
            {book.author_name}
        </div>
        <div>
            {book.edition_count}
        </div>
        {
            shelf?(<div className=' bg-red-700 p-2 text-white rounded-md hover:bg-red-900 hover:cursor-pointer'>
                Remove from Book Shelf
            </div>):(
            added?
            (<div className=' bg-red-900 p-2 text-white rounded-md'>Added</div>):
            (<div className=' bg-red-700 p-2 text-white rounded-md hover:bg-red-900 hover:cursor-pointer' onClick={clickhandler}>
                Add to Book Shelf
            </div>))
        }
        
    </div>
  )
}

export default Card