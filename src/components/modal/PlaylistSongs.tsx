import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import {
  AiOutlineShareAlt,
  AiFillPlayCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsFileEarmarkMusicFill } from "react-icons/bs";

import { song } from "../../interface";
import { Link } from "react-router-dom";
import { delSongPlaylist } from "../../storage/playlist";
import { FcAudioFile, FcMusic } from "react-icons/fc";

interface playlistInformation {
  name: string;
  songs?: song[];
  callbackClose?: () => void;
  refreshSongs?: () => void;
  show?: boolean;
  plIndex: number;
}

export default function PlaylistSongs({
  name,
  plIndex,
  songs = [],
  refreshSongs = () => {},
  callbackClose = () => {},
  show = true,
}: playlistInformation) {
  console.log("This is we are reciving in songs", songs);

  const handleClose = () => {
    callbackClose();
  };
  useEffect(() => {
    console.log();
  }, []);
  const [playListSongs, setplayListSongs] = useState<song[]>(songs!);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      className="new-playlist-modal"
    >
      <Modal.Header closeButton className="text-white btn-close-white">
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column  ">
          <h5 className=" text-warning text-center text-uppercase">
            <b>
              {" "}
              <FcMusic size={36} />
              &nbsp;
              {name}
            </b>
          </h5>
        </div>
        <div
          className="  d-flex flex-column "
          style={{
            padding: "20px 20px",
            maxHeight: "200px",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {songs.length <= 0 ? (
            "Nothing added here"
          ) : (
            <>
              {songs.map((x: song, i) => {
                return (
                  <div
                    className="text-uppercase  m-1 p-2 d-flex justify-content-center rounded shadow-lg"
                    style={{
                      width: "100%",
                      background: "black",
                      cursor: "pointer",
                    }}
                  >
                    <div className="flex-grow-1">
                      <FcAudioFile color="teal" size={28} />
                      &nbsp;
                      <Link
                        to={`/song/${x.id}`}
                        style={{ color: "rgba(222,222,222,.4)" }}
                      >
                        {x.title}
                      </Link>
                    </div>
                    <div
                      onClick={() => {
                        delSongPlaylist(plIndex, i);
                        refreshSongs();
                      }}
                    >
                      <AiOutlineDelete color="crimson" size={28} />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="m-3 d-flex flex-end">
          <div className="flex-grow-1"></div>
          <button
            className=" text-uppercase btn btn-success text-white"
            style={{}}
            onClick={() => {}}
          >
            <AiOutlineShareAlt size={28} color="white" />
          </button>
        </div>
      </Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
}
