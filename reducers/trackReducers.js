import { createSlice } from "@reduxjs/toolkit";

const playSlice = createSlice({
  name: "play",
  initialState: {
    play: false,
  },
  reducers: {
    playTrack: (state, action) => {
      state.play = action.payload;
    },
  },
});

const trackSlice = createSlice({
  name: "track",
  initialState: {
    track: {},
  },
  reducers: {
    playingTrackState: (state, action) => {
      state.track = action.payload;
    },
  },
});

export const { playTrack } = playSlice.actions;
export const { playingTrackState } = trackSlice.actions;

export const playStateReducer = playSlice.reducer;
export const playTrackSateReducer = trackSlice.reducer;
