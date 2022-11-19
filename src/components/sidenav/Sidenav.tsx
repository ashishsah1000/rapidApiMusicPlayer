import { BsMusicNoteBeamed, BsMusicNoteList, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
export default function Sidenav() {
  return (
    <div>
      <div className="d-flex flex-column text-white">
        <div className="flex p-3 font-bold rounded m-2">
          <BsMusicNoteBeamed fontSize={24} />
          &nbsp;&nbsp;Home
        </div>
        <div className="flex p-3 font-bold rounded m-2">
          <BsSearch fontSize={24} />
          &nbsp;&nbsp;Search
        </div>
        <div className="flex p-3 font-bold rounded m-2">
          <AiOutlineHeart fontSize={24} />
          &nbsp;&nbsp;Liked
        </div>
        <div className="flex p-3 font-bold rounded m-2">
          <BsMusicNoteList fontSize={24} />
          &nbsp;&nbsp;Playlist
        </div>
      </div>
    </div>
  );
}
