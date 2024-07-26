import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload);
        }
        ,
        removeSong(state, action){
            //
            // state = state.filter((x)=> x === action.payload)
            const index = state.indexOf(action.payload)
            state.splice(index,1)
        }
    }
})

const store = configureStore({
    reducer:{
        songs: songsSlice.reducer,
    }
})

// console.log(store);

// console.log(songsSlice.actions.addSong);

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "song/addSong",
//   payload: "new song!!",
// });

export {store}
export const { addSong, removeSong } = songsSlice.actions