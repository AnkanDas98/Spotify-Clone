import React from "react";
import SpotifyWebApi from "spotify-web-api-node";

import Sidebar from "./Sidebar";
import Body from "./Body";
import Right from "./Right";

const Dashboard = () => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  return (
    <main>
      <Sidebar />
      <Body spotifyApi={spotifyApi} />
      <Right />
    </main>
  );
};

export default Dashboard;
