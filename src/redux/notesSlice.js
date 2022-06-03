import {createSlice} from '@reduxjs/toolkit';

export const notesSlice= createSlice({
    name: 'notes',
    initialState:{
        items:
        [],
        searchTitle:"",
    },
    reducers:{
        addNote:(state,action)=>{
            state.items.push(action.payload)
        },
        toggle:(state,action)=>{
            const {id} = action.payload;

            const item = state.items.find(item=>item.id===id);
            item.showContent= !item.showContent;
        },
        destroy:(state,action)=>{
            const {id}=action.payload;
            const filtered=state.items.filter(item=>item.id !== id);
            state.items=filtered;
        },
        searchNote:(state,action)=>{
            state.searchTitle = action.payload;
        }
    }
})

export const {addNote,toggle,destroy,searchNote} = notesSlice.actions;

export default notesSlice.reducer;