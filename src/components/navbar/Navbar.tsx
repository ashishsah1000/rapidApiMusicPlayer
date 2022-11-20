import { AiOutlineBell } from "react-icons/ai";
export default function Navbar() {
  return (
    <nav className="navbar navbar-light  justify-content-between">
      <a className="navbar-brand"></a>
      <div className="p-3">
        {/* <img
          className="rounded-circle"
          src="https://picsum.photos/200/200"
          alt=""
          style={{ height: "50px" }}
        /> */}
        <AiOutlineBell size={24} color="white" />
        &nbsp;
        <button className="btn text-white">Login</button>&nbsp;
        <button className="btn btn-warning">Signup</button>
      </div>
    </nav>
  );
}
