import { combineReducers } from "redux";

const initialState = [
  { title: "A", duration: "3:05" },
  { title: "B", duration: "2:05" },
  { title: "C", duration: "4:05" },
  { title: "D", duration: "6:05" },
];

const songsReducer = (state = initialState) => {
  return initialState;
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
