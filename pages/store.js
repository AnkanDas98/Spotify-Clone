import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  playStateReducer,
  playTrackSateReducer,
} from "../reducers/trackReducers";

const rootReducer = combineReducers({
  playState: playStateReducer,
  playTrackSate: playTrackSateReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
