import { Music, Navbar, TopList } from "../components";
import Banner from "../components/banner/Banner";
import Sidenav from "../components/sidenav/Sidenav";
import "./main.css";
// import Disc from "../components/disc/Disc"
export default function Main() {
  return (
    <div className="w-100 h-100 d-flex flex-row ">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minWidth: "250px", height: "100vh", zIndex: 99 }}
      >
        {/* side nav goes here */}
        <Sidenav />
      </div>
      <div className="flex-grow-1 main-container " style={{ zIndex: 9 }}>
        <div className="inner-container">
          <Navbar />
          {/* <Music /> */}
          <TopList />
        </div>
        {/* <Banner /> */}
      </div>
    </div>
  );
}
