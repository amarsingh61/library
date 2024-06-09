import { createSlice } from "@reduxjs/toolkit";



const bookReducer=createSlice({
    name:"book",
    initialState:{
        books:[],
        searchbook:"Query"
    },
    reducers:{
        fetchresults:(state,action)=>{
            state.books=action.payload;
        },
        setsearchdata:(state,action)=>{
            state.searchbook=action.payload;
        }
    }
});

export const {fetchresults,setsearchdata}=bookReducer.actions;

export default bookReducer.reducer;