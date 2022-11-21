import { configureStore } from "@reduxjs/toolkit";
import  songsReducer  from "../features/songs";

export default configureStore({
  reducer: {
    songs:songsReducer
  },
});
