import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");
console.log(reset.toString());

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
        },
    },

    extraReducers(builder){
        builder.addCase(reset, (state,action)=>{
            return []
        })
        // console.log(builder);
        // builder.addCase(moviesSlice.actions.reset, (state,action)=>[])
    }
})

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload)
        },
        removeMovie(state,action){
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
        
        // reset(state,action){
        //     //you can't do this because you just reassign state vairable
        //     // state = []
        //     return []
        // }  
    },
    extraReducers(builder){
        builder.addCase(reset, (state,action)=>{
            return []
        })
    }
})

const store = configureStore({
    // These are combine reducer
    reducer:{
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    },
})
// console.log(store,'store');
// console.log(store);

console.log(songsSlice.actions,' albc');

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "song/addSong",
//   payload: "new song!!",
// });

export {store}
export const { addSong, removeSong } = songsSlice.actions
export const { addMovie, removeMovie } = moviesSlice.actions