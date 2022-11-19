import Banner from "../components/banner/Banner"
import Sidenav from "../components/sidenav/Sidenav"
import "./main.css"
export default function Main() {
    
  return (
    <div className="w-100 h-100 d-flex flex-row ">
        <div className="d-flex align-items-center justify-content-center" style={{width:"250px",height:"100vh"}}>
            {/* side nav goes here */}
            <Sidenav />
        </div>
        <div className="flex-grow-1 main-container p-3" >
            <Banner />
        </div>
    </div>
  )
}
