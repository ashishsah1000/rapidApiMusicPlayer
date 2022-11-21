import { Route, Routes } from "react-router-dom";
import { Music, Navbar, Song, TopList } from "../components";
import Banner from "../components/banner/Banner";
import Sidenav from "../components/sidenav/Sidenav";
import { useSelector } from "react-redux";
import "./main.css";
import Search from "./search/Search";
// import Disc from "../components/disc/Disc"
export default function Main() {
  const background: string = useSelector(
    (state: any) => state.songs.backgroundUrl
  );
  // console.log(background);
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
