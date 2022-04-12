import React from "react";
import SpotifyWebApi from "spotify-web-api-node";

import Sidebar from "./Sidebar";
import Body from "./Body";
import Right from "./Right";
// import { useRecoilState } from "recoil";
// import { playingTrackState } from "../atoms/playerAtom";
import { useSelector, useDispatch } from "react-redux";
import { playingTrackState } from "../reducers/trackReducers";

const Dashboard = () => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  const dispatch = useDispatch();

  // const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  // const { track } = useSelector((state)=>state.playTrackSate)

  const chooseTrack = (track) => {
    dispatch(playingTrackState(track));
  };

  return (
    <main>
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right />
    </main>
  );
};

export default Dashboard;
