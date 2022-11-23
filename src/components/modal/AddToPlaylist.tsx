import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillHeart, AiFillSmile } from "react-icons/ai";
import { song } from "../../interface";
import { addToPlaylist, getPlaylistNames } from "../../storage/playlist";

interface playlistName {
  song?: song;
  callbackClose?: () => void;
  show?: boolean;
}
export default function AddPlaylist({
  song,
  callbackClose = () => {},
  show = true,
}: playlistName) {
  const handleClose = () => {
    callbackClose();
  };
  const [playlistName, setplaylistName] = useState<string[]>([]);
  useEffect(() => {
    setplaylistName([...getPlaylistNames()]);
    console.log("thsi is the playlist name", getPlaylistNames());
    console.log("this is we reciving in current song", song);
  }, []);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      className="new-playlist-modal"
      size="lg"
    >
      <Modal.Header closeButton className="text-white btn-close-white">
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column justify-content-center ">
          <h5 className=" text-warning text-center text-uppercase">
            <b>Add to playlist 🎧</b>
          </h5>
        </div>
        <div
          className="  d-flex flex-wrap align-items-center justify-content-center"
          style={{
            padding: "20px 0px",
            maxHeight: "200px",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {playlistName.length < 0 ? (
            "no playlist"
          ) : (
            <>
              {playlistName.map((x: string, i) => (
                <div
                  className="text-uppercase m-1 p-2 d-flex justify-content-center rounded shadow-lg"
                  style={{
                    minWidth: "200px",
                    background: "black",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    addToPlaylist(i, song!);
                    handleClose();
                  }}
                >
                  {x}
                </div>
              ))}
            </>
          )}
        </div>
        {/* <div className="m-3 d-flex justify-content-center">
          <Button
            variant="warning"
            className=" text-uppercase"
            onClick={() => {}}
          >
            Create Playlist <AiFillHeart size={24} color="tomato" />
          </Button>
        </div> */}
      </Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
}
