import "./listplay.css";
import {
  getSpecificPlaylist,
  removeSinglePlaylist,
} from "../../storage/playlist";
import { playlist } from "../../interface";
import { AiOutlineDelete, AiFillPlayCircle } from "react-icons/ai";
import { FcMusic } from "react-icons/fc";

import { BsFillNodeMinusFill } from "react-icons/bs";
import PlaylistSongs from "../modal/PlaylistSongs";
import { useState } from "react";
import { song } from "../../interface";

interface playlistArray {
  playlists: playlist[];
  refreshPlaylist(): void;
}

export default function ListPlaylist({
  playlists = [],
  refreshPlaylist,
}: playlistArray) {
  const colors: string[] = [
    "MidnightBlue",
    "teal",
    "seagreen",
    "slate",
    "DarkSlateGrey",
    "indigo",
    "RebeccaPurple",
  ];

  const handleShowPlaylist = (i: number) => {
    setspecificPlaylist(getSpecificPlaylist(i));
    setplayListName(playlists[i].name);
    setshow(true);
  };
  const [show, setshow] = useState<boolean>(false);
  const [specificPlaylist, setspecificPlaylist] = useState<song[]>([]);
  const [playListName, setplayListName] = useState<string>("");
  const [playlistIndex, setplaylistIndex] = useState<number>(0);
  const callbackClose = () => {
    setshow(false);
  };
  const getRandomColor = (): string => {
    var i: number = Math.random() * 10;
    if (parseInt(i.toFixed()) < 7) {
      return colors[parseInt(i.toFixed())];
    } else {
      return "black";
    }
  };
  function refreshSongs() {
    setspecificPlaylist(getSpecificPlaylist(playlistIndex));
  }

  getRandomColor();
  console.log("this is the playlist that we are reciving", playlists);
  return (
    <div className="d-flex flex-column justify-content-center ">
      <PlaylistSongs
        plIndex={playlistIndex}
        songs={specificPlaylist}
        name={playListName}
        show={show}
        refreshSongs={refreshSongs}
        callbackClose={callbackClose}
      />
      <div className="d-flex flex-wrap " style={{}}>
        {playlists.map((x: any, i) => {
          return (
            <div
              className="playlist-tiles d-flex m-2 rounded-pill shadow-lg"
              style={{
                background: getRandomColor(),
                color: "rgba(222,222,222,.7)",
                padding: "15px 30px",
                minWidth: "300px",
                height: "65px",
              }}
            >
              <div
                role="button"
                className="flex-grow-1 text-uppercase"
                onClick={() => {
                  handleShowPlaylist(i);
                  setplaylistIndex(i);
                }}
              >
                <FcMusic size={36} />
                &nbsp;
                {x.name}
              </div>
              <div
                role={"button"}
                onClick={() => {
                  removeSinglePlaylist(i);
                  refreshPlaylist();
                }}
              >
                <BsFillNodeMinusFill color="white" size={32} />
              </div>
            </div>
          );
        })}
      </div>

      <></>
    </div>
  );
}
