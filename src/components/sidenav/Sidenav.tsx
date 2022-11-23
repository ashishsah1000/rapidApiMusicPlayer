import { BsMusicNoteBeamed, BsMusicNoteList, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../features/songs";
export default function Sidenav() {
  const active = useSelector((state: any) => state.songs.active);
  const dispatch = useDispatch();
  return (
    <div className="" style={{}}>
      <div className="d-flex flex-column text-white">
        <Link
          to="/home"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <div
            className="flex p-3 font-bold rounded m-2"
            style={{ width: "140px" }}
            onClick={() => dispatch(setActive("home"))}
          >
            <BsMusicNoteBeamed fontSize={24} />
            &nbsp;&nbsp;Home {active == "home" ? <BsDot color="yellow" /> : ""}
          </div>
        </Link>
        <Link
          to="/search"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <div
            className="flex p-3 font-bold rounded m-2"
            onClick={() => dispatch(setActive("search"))}
          >
            <BsSearch fontSize={24} />
            &nbsp;&nbsp;Search{" "}
            {active == "search" ? <BsDot color="yellow" /> : ""}
          </div>
        </Link>
        <Link
          to="/liked"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <div
            className="flex p-3 font-bold rounded m-2"
            onClick={() => dispatch(setActive("liked"))}
          >
            <AiOutlineHeart fontSize={24} />
            &nbsp;&nbsp;Liked{" "}
            {active == "liked" ? <BsDot color="yellow" /> : ""}
          </div>
        </Link>
        <Link
          to="/playlist"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <div
            className="flex p-3 font-bold rounded m-2"
            onClick={() => dispatch(setActive("playlist"))}
          >
            <BsMusicNoteList fontSize={24} />
            &nbsp;&nbsp;Playlist{" "}
            {active == "playlist" ? <BsDot color="yellow" /> : ""}
          </div>
        </Link>
      </div>
    </div>
  );
}
