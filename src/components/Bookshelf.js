import React from 'react'
import Card from './Card';
import { useSelector } from 'react-redux';

const Bookshelf = () => {

  const booksinshelf=useSelector(state=>state.bookshelf.selectedbooks);


  return (
    <div className='pt-24 flex items-center justify-center bg-slate-100 max-w-screen min-h-screen flex-col gap-10 pb-8 px-4'>
      <div className=' grid grid-cols-3 gap-10'>
        {
          booksinshelf &&
          booksinshelf.map((book,index)=>(
            <Card key={index} book={book} shelf={true}></Card>
          ))
        }
      </div>
    </div>

  )
}

export default Bookshelf