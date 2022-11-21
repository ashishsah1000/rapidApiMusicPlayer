import { BsMusicNoteBeamed, BsMusicNoteList, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Sidenav() {
  return (
    <div className="">
      <div className="d-flex flex-column text-white">
        <Link
          to="/home"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <div className="flex p-3 font-bold rounded m-2">
            <BsMusicNoteBeamed fontSize={24} />
            &nbsp;&nbsp;Home
          </div>
        </Link>
        <Link
          to="/search"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <div className="flex p-3 font-bold rounded m-2">
            <BsSearch fontSize={24} />
            &nbsp;&nbsp;Search
          </div>
        </Link>
        <Link
          to="/liked"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <div className="flex p-3 font-bold rounded m-2">
            <AiOutlineHeart fontSize={24} />
            &nbsp;&nbsp;Liked
          </div>
        </Link>
        <Link
          to="/playlist"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <div className="flex p-3 font-bold rounded m-2">
            <BsMusicNoteList fontSize={24} />
            &nbsp;&nbsp;Playlist
          </div>
        </Link>
      </div>
    </div>
  );
}
