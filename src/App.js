import { Route, Routes } from "react-router-dom";
import Booklibrary from "./components/Booklibrary";
import Bookshelf from "./components/Bookshelf";
import "./App.css"
import Navbar from "./components/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { fetchresults } from "./features/bookReducer";

function App() {
  // const [loading,setloading]=useState(true);
  // const searchbook=useSelector(state=>state.book.searchbook);
  // //console.log("fetched from state",searchbook);
  // const dispatch=useDispatch();

  // const books=useSelector(state=>state.book.books);
  // //console.log("fetched from state",books);

  // useEffect(()=>{
  //   const fetchdata=async()=>{
  //     try{
  //       setloading(true);
  //       const response=await fetch(`https://openlibrary.org/search.json?q=${searchbook}&limit=10&page=1`);
  //       const data=await response.json();
  //       dispatch(fetchresults(data.docs));
  //       setloading(false);
  //     }catch(error)
  //     {
  //       console.log(error);
  //       setloading(false);
  //     }
  //   }

  //   fetchdata();
  // },[searchbook,dispatch]);

  // if(loading)
  //   return( 
  //   <div className=" w-screen h-screen  bg-slate-200 flex items-center justify-center">
  //       <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-red-600"></div>
  //   </div>
  //   )
    
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Booklibrary />}></Route>
        <Route path="/bookshelf" element={<Bookshelf/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
