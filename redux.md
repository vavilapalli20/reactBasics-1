
do use redux for small projects we can use state variables but for large products or projects we can use redux and with this we use this  without state variables and using this is the best practice

we should install 2 libraries for redux tool kit
we use redux to save the data of a logged in user and when we log out the information should be deleted
->  npm i -D @reduxjs/toolkit
-> npm i react-redux

and then add store in utils
 - import { configureStore } from "@reduxjs/toolkit";
   import userReducer from "./userSlice"; // this we got from slice

const appStore = configureStore({
    reducer:{
        user: userReducer,
    },
});

export default appStore;

add slice 
- import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name: 'user',
    initialState: "null",
    reducers: {
        addUser: (state,action)=>{
            return action.payload;
        },
        removeUser: (state,action)=>{
            return null;
        },
    },
});

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;


-> we havve set up reducer and now we should give this to the app {if we want to give this to body then}

  <provider store:{appStore}><body /><provider /> 

now we will write a dispatch function in signup, signin and sign out and instead of writing 3 times fire base gives us an utility {onAuthStateChanged} // when ever there is authentication state change then use this API

-- now we will write this function in useEffect in body because when ever we log in we should get the data

-> we used useEffect because we wnated it when we login once so everytime we login we get the data
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            } else {
                dispatch(removeUser());
            }
          });
    },[]); 
    

---- this is for movies
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;