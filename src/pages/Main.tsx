import { Navbar } from "../components"
import Banner from "../components/banner/Banner"
import Sidenav from "../components/sidenav/Sidenav"
import "./main.css"
// import Disc from "../components/disc/Disc"
export default function Main() {
    
  return (
    <div className="w-100 h-100 d-flex flex-row ">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ width: "250px", height: "100vh" }}
      >
        {/* side nav goes here */}
        <Sidenav />
      </div>
      <div className="flex-grow-1 main-container ">
        <div className="inner-container">
          <Navbar />
        </div>
        {/* <Banner /> */}
      </div>
    </div>
  );
}
