import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookReducer";
import bookshelfReducer from "./bookshelfReducer";


const store=configureStore({
    reducer:{
        book:bookReducer,
        bookshelf:bookshelfReducer
    }
})

export default store;