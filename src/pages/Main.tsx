import { Route, Routes } from "react-router-dom";
import { Music, Navbar, Song, TopList } from "../components";
import Banner from "../components/banner/Banner";
import Sidenav from "../components/sidenav/Sidenav";
import { useSelector } from "react-redux";
import "./main.css";
import Search from "./search/Search";
import Liked from "./liked/Liked";
import { intializeUser } from "../storage/user";
import Playlist from "./playlist/Playlist";
import Error from "./error/Error";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
// import Disc from "../components/disc/Disc"
export default function Main() {
  const background: string = useSelector(
    (state: any) => state.songs.backgroundUrl
  );
  // console.log(background);
  const { keycloak, initialized } = useKeycloak();
  // keycloak.logout();
  const isLoggedIn = keycloak.authenticated;
  console.log("From keyclock", isLoggedIn);

  intializeUser("Ashish", "false");

  useEffect(() => {}, []);
  return (
    <div className="w-100 h-100 d-flex flex-row ">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minWidth: "250px", height: "100vh", zIndex: 99 }}
      >
        {/* side nav goes here */}
        <Sidenav />
      </div>
      <div
        className="flex-grow-1 main-container "
        style={{
          background: `url(${background})`,
        }}
      >
        <div className="inner-container">
          <Navbar />
          <Routes>
            <Route path="/home" element={<TopList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/cancel" element={<Error />} />
            <Route path="/song/:id" element={<Song />} />
            <Route path="*" element={<TopList />} />
          </Routes>
          {/* <TopList /> */}
          {/* <Song /> */}
        </div>
        {/* <Banner /> */}
      </div>
    </div>
  );
}
