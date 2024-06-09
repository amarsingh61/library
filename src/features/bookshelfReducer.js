import { createSlice } from "@reduxjs/toolkit";



const bookshelfReducer=createSlice({
    name:"bookshelf",
    initialState:{
        selectedbooks:[]
    },
    reducers:{
        addbook:(state,action)=>{
            state.selectedbooks.push(action.payload);
        },
        deletebook:(state,action)=>{
            const {id}=action.payload;
            state.selectedbooks=state.selectedbooks.filter(element=>element._id===id);
        }

    }
});

export const {addbook,deletebook}=bookshelfReducer.actions;

export default bookshelfReducer.reducer;