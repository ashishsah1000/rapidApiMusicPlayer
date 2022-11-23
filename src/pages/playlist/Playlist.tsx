import { useEffect, useState } from "react";
import {
  checkUserSubscription,
  createPlaylist,
  returnPlaylist,
} from "../../storage/playlist";
import { ListPlaylist, Subscribe } from "../../components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./playlist.css";
import { AiFillHeart, AiFillSmile } from "react-icons/ai";
import {
  BsFillNodePlusFill,
  BsSafe,
  BsServer,
  BsShareFill,
  BsSafe2Fill,
  BsChevronRight,
} from "react-icons/bs";
import { playlist } from "../../interface";
import { useSelector } from "react-redux";
export default function Playlist() {
  const [subStatus, setSubstatus] = useState<boolean>(checkUserSubscription());
  const [show, setShow] = useState<boolean>(false);
  const [playlistName, setplaylistName] = useState<string>("");
  const [allPlaylist, setallPlaylist] = useState<playlist[]>(returnPlaylist());
  let sub = useSelector((state: any) => state.songs.subscription);

  // modal
  function refreshPlaylist() {
    console.log("return playlist updated");
    setallPlaylist(returnPlaylist());
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreatePlaylist = () => {
    if (playlistName.length <= 0) {
      console.log("please add something to add");
    } else {
      console.log("createing playlist");
      createPlaylist(playlistName);
      setplaylistName("");
      setallPlaylist(returnPlaylist());
      setShow(false);
    }
  };
  useEffect(() => {
    if (sub == "true") {
      setSubstatus(true);
    } else {
      setSubstatus(false);
    }
  }, []);
  return (
    <div style={{ padding: "40px 40px" }}>
      {subStatus ? (
        <div
          style={{
            height: "80vh",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {/* <h1>Premium member🍏</h1> */}
          <h2 className="text-uppercase">
            <span style={{ color: "rgba(222,222,222,.3)", fontWeight: 200 }}>
              Playlist
            </span>{" "}
            <BsChevronRight />{" "}
            <Button variant="warning" onClick={handleShow}>
              <b>New</b> <BsFillNodePlusFill size={24} />
            </Button>
          </h2>

          <Modal
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
              <div className="d-flex flex-column justify-content-center">
                <h5 className=" text-warning text-center text-uppercase">
                  <b>add new Playlist 🎧</b>
                </h5>
                <input
                  type="text"
                  className="mt-3"
                  placeholder="Start typing name of playlist "
                  value={playlistName}
                  onChange={(e) => {
                    setplaylistName(e.target.value);
                  }}
                  style={{
                    padding: "10px 20px",
                    margin: "0px auto",
                    width: "100%",
                    outline: "none",
                    background: "rgba(22,22,22,.4)",
                    border: "none",
                    color: "ghostwhite",
                  }}
                />
              </div>
              <div className="m-3 d-flex justify-content-center">
                <Button
                  variant="warning"
                  className=" text-uppercase"
                  onClick={() => {
                    handleCreatePlaylist();
                  }}
                >
                  Create Playlist <AiFillHeart size={24} color="tomato" />
                </Button>
              </div>
            </Modal.Body>
            {/* <Modal.Footer></Modal.Footer> */}
          </Modal>
          {/* modal section for adding playlist */}
          <div className="p-3">
            {allPlaylist.length > 0 ? (
              <>
                <ListPlaylist
                  playlists={allPlaylist}
                  refreshPlaylist={refreshPlaylist}
                />
              </>
            ) : (
              <>
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{ width: "100%", height: "400px", lineHeight: "45px" }}
                >
                  <h2
                    className="font-weight-thin"
                    style={{ fontWeight: "200", color: "rgba(222,222,222,.5)" }}
                  >
                    <AiFillSmile
                      size={50}
                      color="teal"
                      style={{ position: "relative", marginTop: "-4px" }}
                    />{" "}
                    Add, Share and Store
                  </h2>
                  <ul style={{ textDecoration: "none", listStyleType: "none" }}>
                    <li>
                      {" "}
                      <BsShareFill
                        size={20}
                        style={{ position: "relative", marginTop: "-4px" }}
                      />
                      &nbsp;You can start sharing added playlist
                    </li>
                    <li>
                      <BsServer
                        size={20}
                        style={{ position: "relative", marginTop: "-4px" }}
                      />
                      &nbsp; These are in Sync with database
                    </li>
                    <li>
                      <BsSafe2Fill
                        size={20}
                        style={{ position: "relative", marginTop: "-4px" }}
                      />
                      &nbsp;All your music at a place
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <Subscribe />
      )}
    </div>
  );
}
