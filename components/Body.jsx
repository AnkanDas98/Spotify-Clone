import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import Search from "./Search";

const Body = () => {
  const { data: session } = useSession();
  const [searchResults, setSearchResults] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
  }, []);

  const { accessToken } = session;
  console.log(accessToken);
  return (
    <section className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5">
      <Search />
      <div className="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4 "></div>
    </section>
  );
};

export default Body;
