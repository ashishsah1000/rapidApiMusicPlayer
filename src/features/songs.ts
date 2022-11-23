import { createSlice } from "@reduxjs/toolkit";

// interface music{
//     likedSong?: string[],
//     backgroundUrl? : string,
//     value?:number
// }
const state = {
  value: 0,
  likedSong: [],
  backgroundUrl:
    "https://www.bollywoodhungama.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-12-at-1.06.08-PM.jpeg",
  selectedSong: {},
  subscription: false,
  user: "",
  active: "home",
};

export const songsSlice = createSlice({
  name: "songs",
  initialState: state,
  reducers: {
    selectSong: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload);
      state.selectedSong = action.payload;
    },
    changeBackground: (state, action) => {
      state.backgroundUrl = action.payload;
    },
    setSubscription: (state, action) => {
      state.subscription = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectSong,
  changeBackground,
  setSubscription,
  setUser,
  setActive,
} = songsSlice.actions;

export default songsSlice.reducer;
